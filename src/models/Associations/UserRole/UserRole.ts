import { Schema, model, Types } from "mongoose";

const UserRoleSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: Types.ObjectId,
      ref: "Role",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "UserRoles",
  }
);

export const UserRole = model("UserRole", UserRoleSchema);
