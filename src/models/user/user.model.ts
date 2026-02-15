import { Schema, model, Types } from 'mongoose';
import { UserDocument } from './user.interface';

export const User = model(
  'User',
  new Schema<UserDocument>(
    {
      firstName: { type: String, required: true, maxlength: 200 },
      lastName: { type: String, required: true, maxlength: 200 },
      passwordHash: { type: String, required: true, maxlength: 255 },
      contactUsers: [{ type: Schema.Types.ObjectId, ref: 'ContactUser' }],
      address: { type: Schema.Types.ObjectId, ref: 'Address', required: false },
      roles: [{ type: Schema.Types.ObjectId, ref: 'UserRole' }],
    },
    { timestamps: true },
  ),
);
