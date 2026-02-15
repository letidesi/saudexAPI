import { Schema, model, Types } from 'mongoose';
import { AddressDocument } from './address.interface';

export const Address = model(
  'Address',
  new Schema<AddressDocument>(
    {
      street: { type: String, required: true },
      number: { type: String, required: false },
      complement: { type: String, required: false },
      neighborhood: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      addressMedicalCenters: [
        { type: Schema.Types.ObjectId, ref: 'AddressMedicalCenter' },
      ],
      user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    },
    { timestamps: true, collection: 'Address' },
  ),
);
