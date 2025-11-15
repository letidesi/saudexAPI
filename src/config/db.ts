import mongoose from "mongoose";
import { config } from "./config";

export async function connectMongo() {
  try {
    await mongoose.connect(config.mongo.uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
