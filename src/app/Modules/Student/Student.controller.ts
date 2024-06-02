import { Request, Response } from "express";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import { StudentServices } from "./Student.services";
import httpStatus from "http-status";

const getStudent = AsyncCatch(async(req:Request, res:Response)=>{
  const query = req?.query
  const result = await StudentServices.studentgtInToDB(query)
  SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student fatch successfuly ",
      data: result,
    })
})
const getIdByStudent = AsyncCatch(async(req:Request, res:Response)=>{
  const {studentId} = req.params
  const result = await StudentServices.singlestudentgtInToDB(studentId)
  SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student fatch successfuly ",
      data: result,
    })
})

const updateStudent = AsyncCatch(async(req:Request, res:Response)=>{
  const {studentId} = req.params

  const result = await StudentServices.updateStudentInToDb(studentId,req.body )
  SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student fatch successfuly ",
      data: result,
    })
})

const deleteStudent = AsyncCatch(async(req:Request, res:Response)=>{
  const {studentId} = req.params
  const result = await StudentServices.deleteStudentInToDb(studentId)
  SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student fatch successfuly ",
      data: result,
    })
})

export const StudentController = {
  getStudent,
  getIdByStudent,
  updateStudent,
  deleteStudent,
};
