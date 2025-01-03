import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import type { Workout as WorkoutType } from "@/types/workout";
import { findExercise } from "@/data/exercises";

export function Workout() {
  const [, params] = useRoute("/workouts/:id");
  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`/api/workouts/${params?.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch workout");
        }
        const data = await response.json();
        setWorkout(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load workout");
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchWorkout();
    }
  }, [params?.id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 pb-20">
        <p>Loading workout...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 pb-20">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="container mx-auto p-4 pb-20">
        <p>Workout not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">{workout.name}</h1>
      <div className="space-y-4">
        {workout.exercises.map((exercise, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">
              {findExercise(exercise.id)?.name || "Exercise"}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
