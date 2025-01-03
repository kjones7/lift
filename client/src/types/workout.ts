import { ExerciseReference } from "./exercise";

export interface Workout {
  id: string;
  name: string;
  templateId: string;
  exercises: ExerciseReference[];
  lastModified: Date;
  datetimeCreated: Date;
  datetimeCompleted?: Date;
}
