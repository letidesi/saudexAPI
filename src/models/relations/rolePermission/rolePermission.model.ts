import { Schema, model, Types } from 'mongoose';
import { RolePermissionDocument } from './rolePermission.interface';

export const RolePermission = model(
  'RolePermission',
  new Schema<RolePermissionDocument>(
    {
      role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
      permission: {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
        required: true,
      },
    },
    { timestamps: true, collection: 'RolePermission' },
  ),
);
