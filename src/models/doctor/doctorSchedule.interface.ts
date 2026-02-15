import { Document, Types } from 'mongoose';

export interface DoctorScheduleDocument extends Document {
  doctor: Types.ObjectId;
  medicalCenter: Types.ObjectId;
  operatingHours: Array<{
    day: string;
    start: string;
    end: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
