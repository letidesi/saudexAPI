import { Document, Types } from 'mongoose';

export interface UserRoleDocument extends Document {
  user: Types.ObjectId;
  role: Types.ObjectId;
}
