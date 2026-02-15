import { Document, Types } from 'mongoose';

export interface ContactUserDocument extends Document {
  user: Types.ObjectId;
  contact: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
