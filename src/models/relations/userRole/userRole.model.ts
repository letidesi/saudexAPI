import { Schema, model, Types } from 'mongoose';
import { UserRoleDocument } from './userRole.interface';

export const UserRole = model(
  'UserRole',
  new Schema<UserRoleDocument>(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
    },
    { timestamps: true, collection: 'UserRoles' },
  ),
);
