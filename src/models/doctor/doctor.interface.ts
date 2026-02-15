import { Document, Types } from 'mongoose';

export interface DoctorDocument extends Document {
  medicalCenter: Types.ObjectId;
  name: string;
  specialty: string;
  gender: string;
  availableTickets: number;
  createdAt: Date;
  updatedAt: Date;
}
