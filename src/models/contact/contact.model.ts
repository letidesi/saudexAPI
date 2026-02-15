import { Schema, model, Types } from 'mongoose';
import { ContactDocument } from './contact.interface';

export const Contact = model(
  'Contact',
  new Schema<ContactDocument>(
    {
      phone: { type: String, maxlength: 50, required: false },
      email: { type: String, maxlength: 100, required: true },
      contactAdmins: [{ type: Schema.Types.ObjectId, ref: 'ContactAdmin' }],
      contactMedicalCenters: [
        { type: Schema.Types.ObjectId, ref: 'ContactMedicalCenter' },
      ],
      contactUsers: [{ type: Schema.Types.ObjectId, ref: 'ContactUser' }],
    },
    { timestamps: true, collection: 'Contact' },
  ),
);
