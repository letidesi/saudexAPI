import { Document, Types } from 'mongoose';

export interface AdminDocument extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  passwordHash: string;
  contacts: Types.ObjectId[];
  address?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
