import type { Express } from "express";
import { createServer, type Server } from "http";
import { initDb, getDb } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize database
  await initDb();
  const db = getDb();

  // GET /api/workouts - Get all workouts
  app.get("/api/workouts", (_req, res) => {
    const workouts = db.data.workouts;
    res.json(workouts);
  });

  // POST /api/workouts - Create a new workout
  app.post("/api/workouts", async (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required" });
    }

    const workout = {
      id: Date.now().toString(),
      name,
      description,
      createdAt: new Date().toISOString()
    };

    db.data.workouts.push(workout);
    await db.write();

    res.status(201).json(workout);
  });

  const httpServer = createServer(app);
  return httpServer;
}