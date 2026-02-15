import { Document, Types } from 'mongoose';

export interface MedicalCenterDocument extends Document {
  name: string;
  type: string;
  cnpj: string;
  addresses: Types.ObjectId[];
  contacts: Types.ObjectId[];
  operatingHours: Types.ObjectId[];
  doctors: Types.ObjectId[];
  medications: Types.ObjectId[];
}
