import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.services";

const creatStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const studentData = req.body;
  const password = "";
  try {
    const result = await UserService.createStudentDB(password, studentData);
    res.json({
      seccess: true,
      message: "user create successfuly ",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  creatStudent,
};
