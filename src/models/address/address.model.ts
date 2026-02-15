import { Schema, model, Types } from "mongoose";

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },

  number: {
    type: String,
    required: false,
  },

  complement: {
    type: String,
    required: false,
  },

  neighborhood: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  zipCode: {
    type: String,
    required: true,
  },

  addressMedicalCenters: [
    {
      type: Types.ObjectId,
      ref: "AddressMedicalCenter",
    },
  ],

  user: {
    type: Types.ObjectId,
    ref: "User",
    required: false, 
  }
},
{
  timestamps: true 
});

export const Address = model("Address", AddressSchema);
