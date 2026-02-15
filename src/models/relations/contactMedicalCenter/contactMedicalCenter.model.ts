import { Schema, model, Types } from 'mongoose';
import { ContactMedicalCenterDocument } from './contactMedicalCenter.interface';

export const ContactMedicalCenter = model(
  'ContactMedicalCenter',
  new Schema<ContactMedicalCenterDocument>(
    {
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      contact: { type: Schema.Types.ObjectId, ref: 'Contact', required: true },
    },
    { timestamps: true, collection: 'ContactMedicalCenter' },
  ),
);
