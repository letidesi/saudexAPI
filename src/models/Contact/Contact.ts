import { Schema, model, Types } from "mongoose";

const ContactSchema = new Schema(
  {
    phone: {
      type: String,
      maxlength: 50,
      required: false,
    },
    email: {
      type: String,
      maxlength: 100,
      required: true,
    },

    contactAdmins: [
      {
        type: Types.ObjectId,
        ref: "ContactAdmin",
      },
    ],

    contactMedicalCenters: [
      {
        type: Types.ObjectId,
        ref: "ContactMedicalCenter",
      },
    ],

    contactUsers: [
      {
        type: Types.ObjectId,
        ref: "ContactUser",
      },
    ],
  },
  {
    timestamps: true,
    collection: "Contact",
  }
);

export const Contact = model("Contact", ContactSchema);
