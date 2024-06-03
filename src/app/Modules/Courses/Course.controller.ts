import { Request, RequestHandler, Response } from "express"
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch"
import httpStatus from "http-status"
import { CourseServices } from "./Course.services"


const createCourse = AsyncCatch(async(req:Request, res:Response)=>{
    const result = await CourseServices.createCourseInToDb(req.body)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student fatch successfuly ",
        data: result,
      })
  })
const getCourse = AsyncCatch(async(req:Request, res:Response)=>{
    const result = await CourseServices.getCourseInToDb(req.query)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student fatch successfuly ",
        data: result,
      })
  })
const getSingleCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const  id = req.params.id
    const result = await CourseServices.getSingleCourseInToDb(id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student fatch successfuly ",
        data: result,
      })
  })
const deleetCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const id = req?.params?.id
    const result = await CourseServices.deleteCourseInToDb(id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student fatch successfuly ",
        data: result,
      })
  })
const updateCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const id = req?.params.id
    const result = await CourseServices.updateCourseInToDb(id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student fatch successfuly ",
        data: result,
      })
  })

  export const CourseController = {
    createCourse,
    getCourse,
    getSingleCourse,
    updateCourse,
    deleetCourse
  }