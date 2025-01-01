import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { workoutTemplates } from "@/data/templates.ts";
import { findExercise } from "@/data/exercises.ts";
import { startWorkout } from "@/lib/api.ts";

export function Home() {
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
              onClick={async () => {
                try {
                  const resp = await startWorkout(workoutTemplate.id);
                  console.log(resp);
                } catch (error) {
                  console.error("Failed to start workout:", error);
                }
              }}
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
    </div>
  );
}
