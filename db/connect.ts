import mongoose from "mongoose";
declare global {
  var mongoose: any; // any because its a  complex object and its unpractical to define a detailed type for it
}
const MONGODB_URI = process.env.MONGODB_URI;

console.log("MONGODB_URI:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
if (MONGODB_URI){ // checks if MONGODB_URI is defined cause in ts you cant pass a value  that is possibly
  //undefined to a function that expects a defined value.


    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }}

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
