export interface WorkoutTemplate {
  id: string;
  name: string;
  exercises: Array<{
    exerciseId: string;
  }>;
}
