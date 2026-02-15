import { Schema, model, Types } from "mongoose";
import { WeekDay } from "../../constants/operatingHour.enum";

const OperatingHourSchema = new Schema(
  {
    medicalCenter: {
      type: Types.ObjectId,
      ref: "MedicalCenter",
      required: true,
    },

    dayOfWeek: {
      type: String,
      enum: Object.values(WeekDay),
      required: true,
      maxlength: 100,
    },

    openTime: {
      type: String,
      required: true,
    },

    closeTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "OperatingHour",
  }
);

export const OperatingHour = model("OperatingHour", OperatingHourSchema);
