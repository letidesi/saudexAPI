import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 200,
    },

    lastName: {
      type: String,
      required: true,
      maxlength: 200,
    },

    passwordHash: {
      type: String,
      required: true,
      maxlength: 255,
    },

    contactUsers: [
      {
        type: Types.ObjectId,
        ref: "ContactUser", 
      },
    ],

    address: {
      type: Types.ObjectId,
      ref: "Address", 
      required: false,
    },

    roles: [
      {
        type: Types.ObjectId,
        ref: "UserRole", 
      },
    ],
  },
  {
    timestamps: true, 
  }
);

export const User = model("User", UserSchema);
