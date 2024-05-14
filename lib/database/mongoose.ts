import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;//MONGODB_URL
console.log(MONGODB_URL)

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose
console.log(cached)
if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  console.log("connet seeseet1")
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'image_inify_nextjs14-db', bufferCommands: false , connectTimeoutMS: 30000
    })
    console.log(await cached.promise)
  cached.conn = await cached.promise;
  console.log("connet seeseet3")

  return cached.conn;
}