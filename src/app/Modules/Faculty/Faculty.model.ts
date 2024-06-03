import mongoose, { model, Schema } from "mongoose";
import { TFaculty, TUserName } from "./Faculty.interface";
const userNameSchema = new Schema<TUserName>({
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      maxlength: [20, 'Name can not be more than 20 characters'],
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Last Name is required'],
      maxlength: [20, 'Name can not be more than 20 characters'],
    },
  });

const FacultySchema = new Schema<TFaculty>({
  name: {
    type: userNameSchema,
    required:true
  },
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
  },
  designation: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  academicDepartment: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

export const FacultyModel = model("faculty", FacultySchema);
