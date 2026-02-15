import { Document, Types } from 'mongoose';

export interface RolePermissionDocument extends Document {
  role: Types.ObjectId;
  permission: Types.ObjectId;
}
