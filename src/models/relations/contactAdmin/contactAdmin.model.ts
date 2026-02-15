import { Schema, model, Types } from 'mongoose';
import { ContactAdminDocument } from './contactAdmin.interface';

export const ContactAdmin = model(
  'ContactAdmin',
  new Schema<ContactAdminDocument>(
    {
      admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
      contact: { type: Schema.Types.ObjectId, ref: 'Contact', required: true },
    },
    { timestamps: true, collection: 'ContactAdmin' },
  ),
);
