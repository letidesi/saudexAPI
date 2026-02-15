import { Types } from "mongoose";

export interface AdminDocument extends Document {
  firstName: string;
  lastName: string;
  passwordHash: string;
  contacts: Types.ObjectId[];
  address?: Types.ObjectId;
}
