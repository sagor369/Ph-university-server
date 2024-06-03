import mongoose from "mongoose";
import config from "../../../config";
import { AcademicModel } from "../AcademicSemister/AcademicSemister.model";
import { TStudent } from "../Student/Student.interface";
import { Students } from "../Student/Student.model";
import { TUsers } from "./User.interface";
import { UserModel } from "./User.model";
import { genaretadFacultyId, genaretadStudentId } from "./user.utils";
import { AppError } from "../../Middlewares/CustomError";
import httpStatus from "http-status";
import { TFaculty } from "../Faculty/Faculty.interface";
import { FacultyModel } from "../Faculty/Faculty.model";
import { AdminModel } from "../Admin/Admin.model";
import { TAdmin } from "../Admin/Admin.interface";


const createStudentDB = async (password: string, StudentData: TStudent) => {
  const user: Partial<TUsers> = {};

  user.password = password || (config.default_password as string);

  const admissionSemester = await AcademicModel.findOne({
    _id: StudentData?.admissionSemester,
  });
  user.id = await genaretadStudentId(admissionSemester);
  user.role = "student";
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const NewUser = await UserModel.create([user], { session });
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }
    StudentData.user = NewUser[0]?._id;
    StudentData.id = NewUser[0]?.id;

    const createStudent = await Students.create([StudentData], { session });
    if (!createStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
    }
    await session.commitTransaction();
    await session.endSession();
    return createStudent[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "failed to create student and user "
    );
  }
};
const createFacultyInToDb = async (password: string, FacultyData: TFaculty) => {
  const user: Partial<TUsers> = {};

  user.password = password || (config.default_password as string);

  
  user.id = await genaretadFacultyId("faculty");
  user.role = "faculty";
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const NewUser = await UserModel.create([user], { session });
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }
    FacultyData.user = NewUser[0]?._id;
    FacultyData.id = NewUser[0]?.id;

    const createFaculty = await FacultyModel.create([FacultyData], { session });
    if (!createFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create facult");
    }
    await session.commitTransaction();
    await session.endSession();
    return createFaculty[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "failed to create faclty and user "
    );
  }
};
const createAdminInToDb = async (password: string, AdminData: TAdmin) => {
  const user: Partial<TUsers> = {};

  user.password = password || (config.default_password as string);

  
  user.id = await genaretadFacultyId("admin");
  user.role = "faculty";
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const NewUser = await UserModel.create([user], { session });
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }
    AdminData.user = NewUser[0]?._id;
    AdminData.id = NewUser[0]?.id;

    const createAdmin = await AdminModel.create([AdminData], { session });
    if (!createAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Admin");
    }
    await session.commitTransaction();
    await session.endSession();
    return createAdmin[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "failed to create Admin and user "
    );
  }
};

export const UserService = {
  createStudentDB,
  createFacultyInToDb,
  createAdminInToDb
};
