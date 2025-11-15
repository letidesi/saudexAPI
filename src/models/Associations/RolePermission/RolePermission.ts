import { Schema, model, Types } from "mongoose";

const RolePermissionSchema = new Schema(
  {
    role: {
      type: Types.ObjectId,
      ref: "Role",
      required: true,
    },
    permission: {
      type: Types.ObjectId,
      ref: "Permission",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "RolePermission",
  }
);

export const RolePermission = model("RolePermission", RolePermissionSchema);
