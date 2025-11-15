import { Schema, model, Types } from "mongoose";
import { Gender } from "../../constants/gender.enum";

const DoctorSchema = new Schema(
  {
    medicalCenter: {
      type: Types.ObjectId,
      ref: "MedicalCenter",
      required: true,
    },

    name: {
      type: String,
      maxlength: 255,
      required: true,
    },

    specialty: {
      type: String,
      maxlength: 255,
      required: true,
    },

    gender: {
      type: String,
      enum: Object.values(Gender),
      required: true,
    },

    availableTickets: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "Doctor",
  }
);

export const Doctor = model("Doctor", DoctorSchema);
