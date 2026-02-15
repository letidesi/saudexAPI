import { Schema, model, Types } from 'mongoose';
import { AddressMedicalCenterDocument } from './addressMedicalCenter.interface';

export const AddressMedicalCenter = model(
  'AddressMedicalCenter',
  new Schema<AddressMedicalCenterDocument>(
    {
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      address: { type: Schema.Types.ObjectId, ref: 'Address', required: true },
      isPrincipal: { type: Boolean, default: false },
    },
    { timestamps: true, collection: 'AddressMedicalCenter' },
  ),
);
