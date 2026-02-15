import { Schema, model, Types } from 'mongoose';
import { MedicalCenterType } from '../../constants/medicalCenter.enum';
import { MedicalCenterDocument } from './medicalCenter.interface';

export const MedicalCenter = model(
  'MedicalCenter',
  new Schema<MedicalCenterDocument>(
    {
      name: { type: String, maxlength: 255, required: true },
      type: {
        type: String,
        enum: Object.values(MedicalCenterType),
        required: true,
      },
      cnpj: { type: String, maxlength: 20, unique: true, required: true },
      addresses: [{ type: Schema.Types.ObjectId, ref: 'AddressMedicalCenter' }],
      contacts: [{ type: Schema.Types.ObjectId, ref: 'ContactMedicalCenter' }],
      operatingHours: [{ type: Schema.Types.ObjectId, ref: 'OperatingHour' }],
      doctors: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
      medications: [{ type: Schema.Types.ObjectId, ref: 'Medication' }],
    },
    { timestamps: true, collection: 'MedicalCenter' },
  ),
);
