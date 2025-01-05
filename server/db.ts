import { join } from "path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import type { Workout } from "../client/src/types/workout";

interface DbSchema {
  activeWorkout?: string;
  workouts: Workout[];
}

// Default data
const defaultData: DbSchema = {
  workouts: [],
};

let db: Low<DbSchema>;

// Initialize database
export async function initDb() {
  const file = join(process.cwd(), "db.json");
  const adapter = new JSONFile<DbSchema>(file);
  db = new Low<DbSchema>(adapter);

  await db.read();
  db.data ||= defaultData;
  await db.write();
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call initDb() first.");
  }
  return db;
}
