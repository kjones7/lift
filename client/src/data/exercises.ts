import { Exercise } from "../types/exercise";

// Find exercise by ID
export const findExercise = (id: string) =>
  exercises.find((ex) => ex.id === id);

/**
 * The exercises available in the app.
 */
export const exercises: Exercise[] = [
  {
    id: "1",
    name: "Seated Overhead Press",
    bodyPart: "Shoulders",
    category: "Barbell",
  },
  {
    id: "2",
    name: "Bicep Curl",
    bodyPart: "Arms",
    category: "Barbell",
  },
  {
    id: "3",
    name: "Plank",
    bodyPart: "Core",
    category: "Duration",
  },
  {
    id: "4",
    name: "Front Squat",
    bodyPart: "Legs",
    category: "Barbell",
  },
  {
    id: "5",
    name: "Lunge",
    bodyPart: "Legs",
    category: "Dumbbell",
  },
  {
    id: "6",
    name: "Shrug",
    bodyPart: "Shoulders",
    category: "Barbell",
  },
  {
    id: "7",
    name: "Ab Wheel",
    bodyPart: "Core",
    category: "Duration",
  },
  {
    id: "8",
    name: "Bench Press",
    bodyPart: "Chest",
    category: "Barbell",
  },
  {
    id: "9",
    name: "Bent Over One Arm Row",
    bodyPart: "Back",
    category: "Dumbbell",
  },
  {
    id: "10",
    name: "Decline Crunch",
    bodyPart: "Core",
    category: "Weighted Bodyweight",
  },
  {
    id: "11",
    name: "Deadlift",
    bodyPart: "Back",
    category: "Barbell",
  },
  {
    id: "12",
    name: "Triceps Extension",
    bodyPart: "Arms",
    category: "Dumbbell",
  },
  {
    id: "13",
    name: "Hanging Leg Raise",
    bodyPart: "Core",
    category: "Weighted Bodyweight",
  },
  {
    id: "14",
    name: "Stiff Leg Deadlift",
    bodyPart: "Back",
    category: "Barbell",
  },
];
