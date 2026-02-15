import { Schema, model, Types } from "mongoose";
import { RoleType } from "../../constants/role.enum";

const RoleSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
      enum: Object.values(RoleType),
      default: RoleType.GUEST,
    },

    users: [
      {
        type: Types.ObjectId,
        ref: "UserRole", 
      },
    ],

    permissions: [
      {
        type: Types.ObjectId,
        ref: "RolePermission", 
      },
    ],
  },
  {
    timestamps: true, 
  }
);

export const Role = model("Role", RoleSchema);
