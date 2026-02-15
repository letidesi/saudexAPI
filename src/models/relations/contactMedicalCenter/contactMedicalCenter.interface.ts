import { Document, Types } from 'mongoose';

export interface ContactMedicalCenterDocument extends Document {
  medicalCenter: Types.ObjectId;
  contact: Types.ObjectId;
}
