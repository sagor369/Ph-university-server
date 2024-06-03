import { model, Schema } from "mongoose";
import { TCourse, TpreRequist } from "./Course.interface";
const preRequisteSchema = new Schema<TpreRequist>({
  course: { type: Schema.Types.ObjectId, ref:"course" },
  isDelete: { type: Boolean, default: false },
},{
    _id: false
});

const CourseSchema = new Schema<TCourse>({
  title: { type: String, unique: true, trim: true, required: true },
  prefix: { type: String, trim: true, required: true },
  code: { type: Number, required: true },
  creadits: { type: Number, required: true, trim: true },
  preRequisteCourses: [preRequisteSchema],
});

export const  CourseModel = model<TCourse>("courses", CourseSchema)
