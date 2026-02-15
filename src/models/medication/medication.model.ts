import { Schema, model, Types } from "mongoose";
import { MedicationType } from "../../constants/medication.enum";

const MedicationSchema = new Schema(
  {
    medicalCenter: {
      type: Types.ObjectId,
      ref: "MedicalCenter",
      required: true,
    },

    type: {
      type: String,
      enum: Object.values(MedicationType),
      required: true,
      maxlength: 50,
    },

    name: {
      type: String,
      required: true,
      maxlength: 255,
    },

    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Medications",
  }
);

export const Medication = model("Medication", MedicationSchema);
