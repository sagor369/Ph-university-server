import { Request, Response } from "express";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import { StudentServices } from "./Student.services";
import httpStatus from "http-status";

const getStudent = AsyncCatch(async(req:Request, res:Response)=>{
  const result = await StudentServices.studentgtInToDB()
  SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student fatch successfuly ",
      data: result,
    })
})
const getIdByStudent = (req: Request, res: Response) => {};

const updateStudent = (req: Request, res: Response) => {};

const deleteStudent = (req: Request, res: Response) => {};

export const StudentController = {
  getStudent,
  getIdByStudent,
  updateStudent,
  deleteStudent,
};
