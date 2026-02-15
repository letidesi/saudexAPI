import { Document, Types } from 'mongoose';

export interface AddressMedicalCenterDocument extends Document {
  medicalCenter: Types.ObjectId;
  address: Types.ObjectId;
  isPrincipal: boolean;
}
