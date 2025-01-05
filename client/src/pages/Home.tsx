import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { workoutTemplates } from "@/data/templates.ts";
import { findExercise } from "@/data/exercises.ts";
import { startWorkout, getActiveWorkout } from "@/lib/api.ts";
import { useLocation } from "wouter";
import { WorkoutTemplate } from "@/types/template";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export function Home() {
  const [, setLocation] = useLocation();
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<WorkoutTemplate | null>(null);

  const handleSelectTemplate = async (workoutTemplate: WorkoutTemplate) => {
    setSelectedTemplate(workoutTemplate);
    try {
      const resp = await getActiveWorkout();
      if (resp?.id) {
        setIsAlertDialogOpen(true);
      } else {
        // No active workout, start new one directly
        const newWorkout = await startWorkout(workoutTemplate.id);
        setLocation(`/workouts/${newWorkout.id}`);
      }
    } catch (error) {
      console.error("Failed to check active workout:", error);
    }
  };

  /**
   * Home page.
   *
   * - pb-20 must be used so that the footer does not cover the content.
   */
  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">My Templates</h1>

      {workoutTemplates?.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground text-center">
              No templates added yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workoutTemplates?.map((workoutTemplate) => (
            <Card
              key={workoutTemplate.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSelectTemplate(workoutTemplate)}
            >
              <CardHeader>
                <CardTitle>{workoutTemplate.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {workoutTemplate.exercises
                    ?.map((exercise) => {
                      const fullExercise = findExercise(exercise.id);
                      return fullExercise?.name || "Exercise not found";
                    })
                    .join(", ") || "No exercises available"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog open={isAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Start New Workout?</AlertDialogTitle>
            <AlertDialogDescription>
              You already have an active workout. Are you sure you want to stop
              it and start a new one?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsAlertDialogOpen(false);
                setSelectedTemplate(null);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                try {
                  // Replace with actual API call to stop current workout if needed
                  if (!selectedTemplate) return;
                  const resp = await startWorkout(selectedTemplate.id);
                  setLocation(`/workouts/${resp.id}`);
                  setIsAlertDialogOpen(false);
                } catch (error) {
                  console.error("Failed to start workout:", error);
                }
              }}
            >
              Start Workout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
