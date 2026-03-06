import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // Fail fast in development if the env is missing.
  throw new Error("MONGODB_URI environment variable is not set");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConnection: Promise<typeof mongoose> | undefined;
}

let cached = global._mongooseConnection;

if (!cached) {
  cached = mongoose.connect(MONGODB_URI);
  global._mongooseConnection = cached;
}

export async function connectToDatabase() {
  return cached;
}

