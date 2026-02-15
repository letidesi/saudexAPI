import { Schema, model, Types } from 'mongoose';
import { PermissionType } from '../../constants/permissionType.enum';
import { PermissionDocument } from './permission.interface';

export const Permission = model(
  'Permission',
  new Schema<PermissionDocument>(
    {
      type: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        enum: Object.values(PermissionType),
      },
      roles: [{ type: Schema.Types.ObjectId, ref: 'RolePermission' }],
    },
    { timestamps: true },
  ),
);
