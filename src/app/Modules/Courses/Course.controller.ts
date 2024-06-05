import { Request, RequestHandler, Response } from "express"
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch"
import httpStatus from "http-status"
import { CourseServices } from "./Course.services"


const createCourse = AsyncCatch(async(req:Request, res:Response)=>{
    const result = await CourseServices.createCourseInToDb(req.body)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "create course is successfuly ",
        data: result,
      })
  })
const getCourse = AsyncCatch(async(req:Request, res:Response)=>{
    const result = await CourseServices.getCourseInToDb(req.query)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course fatch successfuly ",
        data: result,
      })
  })
const getSingleCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const  id = req.params.id
    const result = await CourseServices.getSingleCourseInToDb(id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course fatch successfuly ",
        data: result,
      })
  })
const deleteCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const id = req?.params?.id
    const result = await CourseServices.deleteCourseInToDb(id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course delete successfuly ",
        data: result,
      })
  })
const updateCourse = AsyncCatch(async(req:Request, res:Response)=>{
   const id = req?.params.id
    const result = await CourseServices.updateCourseInToDb(id, req.body)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course update successfuly ",
        data: result,
      })
  })

  const AssignCourseFaculty = AsyncCatch(async(req:Request, res:Response)=>{
    const {faculties}  = req.body 
    const {courseId} = req.params
    const result = await CourseServices.courseAssignInToDb(courseId, faculties)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Create Faculty in course successfuly ",
      data: result,
    })
  })
  const DeleteCourseFaculty = AsyncCatch(async(req:Request, res:Response)=>{
    const {faculties}  = req.body 
    const {courseId} = req.params
    const result = await CourseServices.updateCourseAssignInToDb(courseId, faculties)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Delete Faculty from course successfuly ",
      data: result,
    })
  })

  export const CourseController = {
    createCourse,
    getCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    AssignCourseFaculty,
    DeleteCourseFaculty
  }