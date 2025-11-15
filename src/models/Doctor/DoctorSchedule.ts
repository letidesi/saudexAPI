import { Schema, model, Types } from 'mongoose';

const DoctorScheduleSchema = new Schema(
  {
    doctor: {
      type: Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    medicalCenter: {
      type: Types.ObjectId,
      ref: 'MedicalCenter',
      required: true,
    },
    operatingHours: [
      {
        day: String,
        start: String,
        end: String,
      },
    ],
  },
  { timestamps: true, collection: 'DoctorSchedule' },
);

export const DoctorSchedule = model('DoctorSchedule', DoctorScheduleSchema);
