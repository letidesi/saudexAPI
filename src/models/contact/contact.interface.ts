import { Document, Types } from 'mongoose';

export interface ContactDocument extends Document {
  phone?: string;
  email: string;
  contactAdmins: Types.ObjectId[];
  contactMedicalCenters: Types.ObjectId[];
  contactUsers: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
