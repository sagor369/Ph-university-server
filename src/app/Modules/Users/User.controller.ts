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
      message: "user create successfuly ",
      data: result,
    });
  }
);

export const UserController = {
  creatStudent,
};
