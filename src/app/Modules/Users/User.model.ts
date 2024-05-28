import { Schema, model } from "mongoose";
import { TUsers } from "./User.interface";
import bcrypt from "bcrypt";
import config from "../../../config";

const UserSchema = new Schema<TUsers>(
  {
    password: { type: String, required: true },
    needdedPassword: { type: Boolean, default: true },
    id: { type: String, required: true , unique: true},
    isDelete: { type: Boolean, default: false },
    role: { type: String, enum: ["student", "faculty", "admin"] },
    status: {
      type: String,
      enum: ["in-progress", "block"],
      default: "in-progress",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bc_hash));
  next();
});

UserSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const UserModel = model<TUsers>("user", UserSchema);
