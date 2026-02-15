import { Types } from 'mongoose';

export interface AddressDocument extends Document {
  street: string;
  number?: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  addressMedicalCenters: Types.ObjectId[];
  user?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
