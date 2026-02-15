import { Document, Types } from 'mongoose';

export interface MedicationDocument extends Document {
  medicalCenter: Types.ObjectId;
  type: string;
  name: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
