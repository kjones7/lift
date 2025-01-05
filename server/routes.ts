import type { Express } from "express";
import { createServer, type Server } from "http";
import { initDb, getDb } from "./db";
import { workoutTemplates } from "@/data/templates";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize database
  await initDb();
  const db = getDb();

  app.get("/api/workouts/active", async (_req, res) => {
    try {
      // Check if database is initialized
      if (!db.data) {
        return res.status(500).json({
          error: "Database not initialized",
        });
      }

      // If there's no active workout, return 204 No Content
      if (!db.data.activeWorkout) {
        return res.status(204).end();
      }

      const workout = db.data.workouts.find(
        (w) => w.id === db.data?.activeWorkout,
      );

      // This would indicate a data integrity issue - we have an activeWorkout ID
      // but no matching workout in the workouts array
      if (!workout) {
        return res.status(500).json({
          error: "Active workout reference exists but workout not found",
          workoutId: db.data.activeWorkout,
        });
      }

      return res.json(workout);
    } catch (error) {
      console.error("Error fetching active workout:", error);
      return res.status(500).json({
        error: "Internal server error while fetching active workout",
      });
    }
  });

  app.get("/api/workouts/:id", async (req, res) => {
    const { id } = req.params;
    const workout = db.data?.workouts.find((w) => w.id === id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    return res.json(workout);
  });

  app.post("/api/workouts", async (req, res) => {
    const { templateId } = req.body;

    // Check if there's already an active workout
    // const activeWorkout = db.data?.workouts.find(w => !w.datetimeCompleted);
    // if (activeWorkout) {
    //   return res.status(400).json({ error: 'There is already an active workout' });
    // }

    // Create new workout from template
    const template = workoutTemplates.find((t) => t.id === templateId);
    if (!template) {
      return res.status(404).json({ error: "Template not found" });
    }

    const newWorkout = {
      id: crypto.randomUUID(),
      name: template.name,
      templateId: template.id,
      exercises: [...template.exercises],
      lastModified: new Date(),
      datetimeCreated: new Date(),
      datetimeCompleted: undefined,
    };

    if (!db.data)
      return res.status(500).json({ error: "Database not initialized" });

    db.data.workouts.push(newWorkout);
    db.data.activeWorkout = newWorkout.id;

    await db.write();

    return res.status(201).json(newWorkout);
  });

  const httpServer = createServer(app);
  return httpServer;
}
