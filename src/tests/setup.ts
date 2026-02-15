import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI =
  process.env.MONGO_URI || 'teste';
beforeAll(async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}, 30000);

afterAll(async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error('MongoDB disconnection failed:', error);
    throw error;
  }
}, 30000);
