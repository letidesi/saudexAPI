import { Schema, model, Types } from "mongoose";

const ContactUserSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    contact: {
      type: Types.ObjectId,
      ref: "Contact",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "ContactUsers",
  }
);

export const ContactUser = model("ContactUser", ContactUserSchema);
