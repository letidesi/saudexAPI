import { Document, Types } from 'mongoose';

export interface RoleDocument extends Document {
  type: string;
  users: Types.ObjectId[];
  permissions: Types.ObjectId[];
}
