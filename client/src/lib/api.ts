import type { Workout } from "../types/workout";

const BASE_URL = '/api';

export async function fetchWorkouts() {
  const response = await fetch(`${BASE_URL}/workouts`);
  if (!response.ok) {
    throw new Error('Failed to fetch workouts');
  }
  return response.json();
}

export async function createWorkout(workout: Omit<Workout, 'id' | 'createdAt'>) {
  const response = await fetch(`${BASE_URL}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workout),
  });

  if (!response.ok) {
    throw new Error('Failed to create workout');
  }
  return response.json();
}