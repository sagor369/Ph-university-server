import mongoose from "mongoose";
import { TStudent } from "./Student.interface";
import { Students } from "./Student.model";
import httpStatus from "http-status";
import { AppError } from "../../Middlewares/CustomError";
import { UserModel } from "../Users/User.model";

const studentgtInToDB = async () => {
  const result = await Students.find()
    .populate("admissionSemester")
    .populate("academicDepartment");
  return result;
};
const singlestudentgtInToDB = async (id: string) => {
  const result = await Students.findOne({ id })
    .populate("admissionSemester")
    .populate("academicDepartment");
  return result;
};

const updateStudentInToDb = async (
  studentId: string,
  payload: Partial<TStudent>
) => {
    const {name, ...remainingData} = payload
    const modifiUpdateData:Record<string, unknown> = {...remainingData}
    if(name && Object.keys(name).length){
        for (const [key, value] of Object.entries(name)){
            modifiUpdateData[`name.${key}`] = value
        }
    }
  const result = await Students.findOneAndUpdate({ id: studentId }, modifiUpdateData, {
    new: true,
  });
  return result;
};

const deleteStudentInToDb = async (studentId: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const studentDelete = await Students.findOneAndUpdate(
      { id: studentId },
      { isDelete: true },
      { new: true, session }
    );
    if (!studentDelete) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student");
    }

    const userDelete = await UserModel.findOneAndUpdate(
      { id: studentId },
      { isDelete: true },
      { new: true, session }
    );
    if (!userDelete) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user");
    }
    await session.commitTransaction();
    await session.endSession();
    return studentDelete;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student");
  }
};

export const StudentServices = {
  studentgtInToDB,
  singlestudentgtInToDB,
  updateStudentInToDb,
  deleteStudentInToDb,
};
