import { Document, Types } from 'mongoose';

export interface PermissionDocument extends Document {
  type: string;
  roles: Types.ObjectId[];
}
