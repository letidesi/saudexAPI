import { Schema, model, Types } from 'mongoose';
import { AdminDocument } from './admin.interface';

const AdminSchema = new Schema<AdminDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String, required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'ContactAdmin' }],
    address: { type: Schema.Types.ObjectId, ref: 'Address', required: false },
  },
  {
    timestamps: true,
  },
);

export const Admin = model('Admin', AdminSchema, 'admins');
