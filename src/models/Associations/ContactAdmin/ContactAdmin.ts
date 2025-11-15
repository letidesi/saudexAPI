import { Schema, model, Types } from "mongoose";

const ContactAdminSchema = new Schema(
  {
    admin: {
      type: Types.ObjectId,
      ref: "Admin",
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
    collection: "ContactAdmin",
  }
);

export const ContactAdmin = model("ContactAdmin", ContactAdminSchema);
