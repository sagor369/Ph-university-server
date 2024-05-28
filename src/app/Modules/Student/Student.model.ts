import { model, Schema } from "mongoose";
import { TStudent } from "./Student.interface";

const StudentSchema = new Schema<TStudent>({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middelName: { type: String },
  },
  email: { type: String, required: true , unique:true },
  id: { type: String, required: true, unique:true },
  user: { type: Schema.Types.ObjectId, required: true },
  emergencyContactNo: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  profileImage: { type: String, required: true },
  gender: { enum: ["male", "female", "other"] },
  guardian: { type: String, required: true },
  admissionSemester: { type: Schema.Types.ObjectId, ref: "AcademicModel"  },
  age: { type: Number, required: true },
  contactNo: { type: String, required: true },
  dateOfBirth: { type: Date },
  localGuardian: { type: String },
  presentAddress: { type: String },
});

export const Students = model("student", StudentSchema);
