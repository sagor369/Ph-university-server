import { model, Schema } from "mongoose";
import { TCourse, TCourseFaculty, TpreRequist } from "./Course.interface";
const preRequisteSchema = new Schema<TpreRequist>({
  course: { type: Schema.Types.ObjectId, ref:"courses" },
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

const CourseFacultySchema = new Schema<TCourseFaculty>({
  course:{type: Schema.Types.ObjectId,
    required:true,
    unique:true,
    ref: "courses"
  },
  facultys:[{Type:Schema.Types.ObjectId ,
    ref: "faculty"
  }]
})

export const CourseFaculty = model<TCourseFaculty>("courseFaculty", CourseFacultySchema)

export const  CourseModel = model<TCourse>("courses", CourseSchema)
