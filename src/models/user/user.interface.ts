import { Document, Types } from 'mongoose';

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  passwordHash: string;
  contactUsers: Types.ObjectId[];
  address?: Types.ObjectId;
  roles: Types.ObjectId[];
}
