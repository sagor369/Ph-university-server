import { Request, Response } from "express";
import { UserService } from "./User.services";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import httpStatus from "http-status";

const creatStudent = AsyncCatch(
  async (req: Request, res: Response) => {
    const studentData = req.body;
    const password = "";
    const result = await UserService.createStudentDB(password, studentData);
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "student create successfuly ",
      data: result,
    });
  }
);
const creatFaculty = AsyncCatch(
  async (req: Request, res: Response) => {
    const facultyData = req.body;
    const password = "";
    const result = await UserService.createFacultyInToDb(password, facultyData);
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "faculty create successfuly ",
      data: result,
    });
  }
);
const creatAdmin = AsyncCatch(
  async (req: Request, res: Response) => {
    const adminData = req.body;
    const password = "";
    const result = await UserService.createAdminInToDb(password, adminData);
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "faculty create successfuly ",
      data: result,
    });
  }
);

export const UserController = {
  creatStudent,
  creatFaculty,
  creatAdmin
};
