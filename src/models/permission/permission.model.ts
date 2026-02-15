import { Schema, model, Types } from 'mongoose';
import { PermissionType } from '../../constants/permissionType.enum';

const PermissionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
      enum: Object.values(PermissionType),
    },

    roles: [
      {
        type: Types.ObjectId,
        ref: 'RolePermission',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Permission = model('Permission', PermissionSchema);
