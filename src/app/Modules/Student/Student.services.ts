import mongoose from "mongoose";
import { TStudent } from "./Student.interface";
import { Students } from "./Student.model";
import httpStatus from "http-status";
import { AppError } from "../../Middlewares/CustomError";
import { UserModel } from "../Users/User.model";
import BuildsQuery from "../../Builds/QueryBuilds";

const studentgtInToDB = async (query: Record<string, unknown>) => {

 
  // excludeFields.forEach((el) => delete queryObj[el]);
  // console.log(queryObj);
  // const searchQuery = Students.find({
  //   $or: existsQuery.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: "i" },
  //   })),
  // })
  //   .populate("admissionSemester")
  //   .populate("academicDepartment");
  // const fieldQuery = searchQuery.find(queryObj);
  // let sort = "-createAt";
  // if (query?.sort) {
  //   sort = query?.sort as string;
  // }
  // const sortQuery = fieldQuery.sort(sort);

  // let page = 1;
  // let limit = 1;
  // let skep = 0;
  // if (query?.limit) {
  //   limit = Number(query?.limit);
  // }
  // if (query?.page) {
  //   page = Number(query?.page);
  //   skep = (page - 1) * limit;
  // }

  // const Paginat = sortQuery.skip(skep);
  // const limitQuery = Paginat.limit(limit);
  // let fields = "__v";
  // if (query.field) {
  //   fields = (query.field as string).split(",").join(" ");
  // }

  // const fieldsQuery = await limitQuery.select(fields);
  const searchField = ["permanentAddress", "email", "name.firstName"];
  const excludeFields = ["searchTerm", "sort", "page", "limit", "field"];
  const GetStudent = new BuildsQuery(Students.find(), query).search(searchField).filter(excludeFields).limit().paginat().sort().fields()
  const result = await GetStudent.modelQuery

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
  const { name, ...remainingData } = payload;
  const modifiUpdateData: Record<string, unknown> = { ...remainingData };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiUpdateData[`name.${key}`] = value;
    }
  }
  const result = await Students.findOneAndUpdate(
    { id: studentId },
    modifiUpdateData,
    {
      new: true,
    }
  );
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
