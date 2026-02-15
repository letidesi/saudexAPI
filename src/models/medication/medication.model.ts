import { Schema, model, Types } from 'mongoose';
import { MedicationType } from '../../constants/medication.enum';
import { MedicationDocument } from './medication.interface';

export const Medication = model(
  'Medication',
  new Schema<MedicationDocument>(
    {
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      type: {
        type: String,
        enum: Object.values(MedicationType),
        required: true,
        maxlength: 50,
      },
      name: { type: String, required: true, maxlength: 255 },
      quantity: { type: Number, default: 0, required: true },
    },
    { timestamps: true, collection: 'Medications' },
  ),
);
