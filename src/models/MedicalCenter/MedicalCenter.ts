import { Schema, model, Types } from "mongoose";
import { MedicalCenterType } from "../../constants/medicalCenter.enum";

const MedicalCenterSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 255,
      required: true,
    },

    type: {
      type: String,
      enum: Object.values(MedicalCenterType),
      required: true,
    },

    cnpj: {
      type: String,
      maxlength: 20,
      unique: true,
      required: true,
    },


    addresses: [
      {
        type: Types.ObjectId,
        ref: "AddressMedicalCenter",
      },
    ],

    contacts: [
      {
        type: Types.ObjectId,
        ref: "ContactMedicalCenter",
      },
    ],

    operatingHours: [
      {
        type: Types.ObjectId,
        ref: "OperatingHour",
      },
    ],

    doctors: [
      {
        type: Types.ObjectId,
        ref: "Doctor",
      },
    ],

    medications: [
      {
        type: Types.ObjectId,
        ref: "Medication",
      },
    ],
  },
  {
    timestamps: true,
    collection: "MedicalCenter",
  }
);

export const MedicalCenter = model("MedicalCenter", MedicalCenterSchema);
