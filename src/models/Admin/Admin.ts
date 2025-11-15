import { Schema, model, Types } from "mongoose";

const AdminSchema = new Schema({
  firstName: {
    type: String,
    required: true, 
  },

  lastName: {
    type: String,
    required: true,
  },

  passwordHash: {
    type: String,
    required: true,
  },

  contacts: [
    {
      type: Types.ObjectId,
      ref: "ContactAdmin",
    },
  ],

  address: {
    type: Types.ObjectId,
    ref: "Address",
    required: false, 
  }
},
{
  timestamps: true 
});

export const Admin = model("Admin", AdminSchema);
