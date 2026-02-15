import { Schema, model, Types } from 'mongoose';
import { ContactUserDocument } from './contactUser.interface';

export const ContactUser = model(
  'ContactUser',
  new Schema<ContactUserDocument>(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      contact: { type: Schema.Types.ObjectId, ref: 'Contact', required: true },
    },
    { timestamps: true, collection: 'ContactUsers' },
  ),
);
