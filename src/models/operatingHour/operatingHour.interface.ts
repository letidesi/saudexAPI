import { Document, Types } from 'mongoose';

export interface OperatingHourDocument extends Document {
  medicalCenter: Types.ObjectId;
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  createdAt: Date;
  updatedAt: Date;
}
