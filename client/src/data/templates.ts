import { WorkoutTemplate } from "../types/template";
import { findExercise } from "./exercises";

// Helper function to find exercise by ID

/**
 * The workout templates available in the app.
 */
export const workoutTemplates: WorkoutTemplate[] = [
  {
    id: "1",
    name: "Day 1 (OH Press)",
    exercises: [
      {
        exerciseId: findExercise("1")?.id ?? "", // Seated Overhead Press
      },
      {
        exerciseId: findExercise("2")?.id ?? "", // Bicep Curl
      },
      {
        exerciseId: findExercise("3")?.id ?? "", // Plank
      },
    ],
  },
  {
    id: "2",
    name: "Day 2 (Squat)",
    exercises: [
      {
        exerciseId: findExercise("4")?.id ?? "", // Front Squat
      },
      {
        exerciseId: findExercise("5")?.id ?? "", // Lunge
      },
      {
        exerciseId: findExercise("6")?.id ?? "", // Shrug
      },
      {
        exerciseId: findExercise("7")?.id ?? "", // Ab Wheel
      },
    ],
  },
  {
    id: "3",
    name: "Day 3 (Bench)",
    exercises: [
      {
        exerciseId: findExercise("8")?.id ?? "", // Bench Press
      },
      {
        exerciseId: findExercise("9")?.id ?? "", // Bent Over One Arm Row
      },
      {
        exerciseId: findExercise("10")?.id ?? "", // Decline Crunch
      },
    ],
  },
  {
    id: "4",
    name: "Day 4 (Deadlift)",
    exercises: [
      {
        exerciseId: findExercise("11")?.id ?? "", // Deadlift
      },
      {
        exerciseId: findExercise("14")?.id ?? "", // Stiff Leg Deadlift
      },
      {
        exerciseId: findExercise("12")?.id ?? "", // Triceps Extension
      },
      {
        exerciseId: findExercise("13")?.id ?? "", // Hanging Leg Raise
      },
    ],
  },
];
