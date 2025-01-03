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
        id: findExercise("1")?.id ?? "", // Seated Overhead Press
      },
      {
        id: findExercise("2")?.id ?? "", // Bicep Curl
      },
      {
        id: findExercise("3")?.id ?? "", // Plank
      },
    ],
  },
  {
    id: "2",
    name: "Day 2 (Squat)",
    exercises: [
      {
        id: findExercise("4")?.id ?? "", // Front Squat
      },
      {
        id: findExercise("5")?.id ?? "", // Lunge
      },
      {
        id: findExercise("6")?.id ?? "", // Shrug
      },
      {
        id: findExercise("7")?.id ?? "", // Ab Wheel
      },
    ],
  },
  {
    id: "3",
    name: "Day 3 (Bench)",
    exercises: [
      {
        id: findExercise("8")?.id ?? "", // Bench Press
      },
      {
        id: findExercise("9")?.id ?? "", // Bent Over One Arm Row
      },
      {
        id: findExercise("10")?.id ?? "", // Decline Crunch
      },
    ],
  },
  {
    id: "4",
    name: "Day 4 (Deadlift)",
    exercises: [
      {
        id: findExercise("11")?.id ?? "", // Deadlift
      },
      {
        id: findExercise("14")?.id ?? "", // Stiff Leg Deadlift
      },
      {
        id: findExercise("12")?.id ?? "", // Triceps Extension
      },
      {
        id: findExercise("13")?.id ?? "", // Hanging Leg Raise
      },
    ],
  },
];
