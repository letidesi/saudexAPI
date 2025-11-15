import { Schema, model, Types } from "mongoose";

const ContactMedicalCenterSchema = new Schema(
  {
    medicalCenter: {
      type: Types.ObjectId,
      ref: "MedicalCenter",
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
    collection: "ContactMedicalCenter",
  }
);

export const ContactMedicalCenter = model(
  "ContactMedicalCenter",
  ContactMedicalCenterSchema
);
