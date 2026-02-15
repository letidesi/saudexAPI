import { Schema, model, Types } from 'mongoose';
import { Gender } from '../../constants/gender.enum';
import { DoctorDocument } from './doctor.interface';

export const Doctor = model(
  'Doctor',
  new Schema<DoctorDocument>(
    {
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      name: { type: String, maxlength: 255, required: true },
      specialty: { type: String, maxlength: 255, required: true },
      gender: { type: String, enum: Object.values(Gender), required: true },
      availableTickets: { type: Number, required: true, default: 0 },
    },
    { timestamps: true, collection: 'Doctor' },
  ),
);
