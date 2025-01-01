import { Exercise } from "./exercise";

export interface Workout {
  id: string;
  name: string;
  templateId: string;
  exercises: Exercise[];
  lastModified: Date;
  datetimeCreated: Date;
  datetimeCompleted?: Date;
}
