import { Workout } from "@/types/workout";

const BASE_URL = "/api";

export async function fetchWorkouts() {
  const response = await fetch(`${BASE_URL}/workouts`);
  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }
  return response.json();
}

export async function startWorkout(templateId: string) {
  const response = await fetch(`${BASE_URL}/workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ templateId }),
  });

  if (!response.ok) {
    throw new Error("Failed to start workout");
  }
  return response.json();
}

export async function getActiveWorkout(): Promise<Workout | null> {
  const response = await fetch(`${BASE_URL}/workouts/active`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 204) {
    // No active workout
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to get active workout");
  }

  return response.json() as Promise<Workout>;
}
