import { Document, Types } from 'mongoose';

export interface ContactAdminDocument extends Document {
  admin: Types.ObjectId;
  contact: Types.ObjectId;
}
