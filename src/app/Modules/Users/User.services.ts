import mongoose from "mongoose";
import config from "../../../config";
import { AcademicModel } from "../AcademicSemister/AcademicSemister.model";
import { TStudent } from "../Student/Student.interface";
import { Students } from "../Student/Student.model";
import { TUsers } from "./User.interface";
import { UserModel } from "./User.model";
import { genaretadId } from "./user.utils";
import { AppError } from "../../Middlewares/CustomError";
import httpStatus from "http-status";

const createStudentDB = async (password: string, StudentData: TStudent) => {
  const user: Partial<TUsers> = {};

  user.password = password || (config.default_password as string);

  const admissionSemester = await AcademicModel.findOne({
    _id: StudentData.admissionSemester,
  });
  user.id = await genaretadId(admissionSemester);
  user.role = "student";
  const session =await mongoose.startSession()
  try{
     session.startTransaction()
    const NewUser = await UserModel.create([user], {session});
  if ( !NewUser.length) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
  }
  StudentData.user = NewUser[0]?._id;
  StudentData.id = NewUser[0]?.id;

  const createStudent = await Students.create([StudentData], {session});
  if (!createStudent.length) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
  }
  await session.commitTransaction();
  await session.endSession();
  return createStudent[0];

  }catch(error){
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, "failed to create student and user ")
  }
};

export const UserService = {
  createStudentDB,
};
