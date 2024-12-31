import { exercises } from "@/data/exercises";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

/**
 * Exercises page.
 *
 * Displays a list of exercises.
 */
export function Exercises() {
  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Exercises</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{exercise.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {exercise.bodyPart}
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                  {exercise.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
