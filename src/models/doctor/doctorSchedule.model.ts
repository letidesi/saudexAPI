import { Schema, model, Types } from 'mongoose';
import { DoctorScheduleDocument } from './doctorSchedule.interface';

export const DoctorSchedule = model(
  'DoctorSchedule',
  new Schema<DoctorScheduleDocument>(
    {
      doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      operatingHours: [{ day: String, start: String, end: String }],
    },
    { timestamps: true, collection: 'DoctorSchedule' },
  ),
);
