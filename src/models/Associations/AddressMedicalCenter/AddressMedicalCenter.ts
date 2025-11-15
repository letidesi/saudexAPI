import { Schema, model, Types } from "mongoose";

const AddressMedicalCenterSchema = new Schema({
  medicalCenter: {
    type: Types.ObjectId,
    ref: "MedicalCenter",
    required: true, 
  },

  address: {
    type: Types.ObjectId,
    ref: "Address",
    required: true,
  },

  isPrincipal: {
    type: Boolean,
    default: false,
  }
},
{
  timestamps: true 
});

export const AddressMedicalCenter = model("AddressMedicalCenter", AddressMedicalCenterSchema);
