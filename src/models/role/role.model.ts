import { Schema, model, Types } from 'mongoose';
import { RoleType } from '../../constants/role.enum';
import { RoleDocument } from './role.interface';

export const Role = model(
  'Role',
  new Schema<RoleDocument>(
    {
      type: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        enum: Object.values(RoleType),
        default: RoleType.GUEST,
      },
      users: [{ type: Schema.Types.ObjectId, ref: 'UserRole' }],
      permissions: [{ type: Schema.Types.ObjectId, ref: 'RolePermission' }],
    },
    { timestamps: true },
  ),
);
