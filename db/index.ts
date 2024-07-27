import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// THe ! at the end is a non-null assertion operator in TypeScript. It tells the TypeScript compiler that the expression is guaranteed to not be null or undefined
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);
