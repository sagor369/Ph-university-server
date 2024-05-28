import { Request, Response } from "express";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import { AcademicSemisterServices } from "./AcademicSemister.services";
import httpStatus from "http-status";

const createAcademicSemister = AsyncCatch(async(req:Request, res:Response)=>{

    const result = await AcademicSemisterServices.postAcademicSemister(req.body)

    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic semister create successfuly ",
        data: result,
      })
})

const getAcademicSemister =AsyncCatch(async(req:Request, res:Response)=>{
    const result = await AcademicSemisterServices.getAcademicSemister()
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic semister fatch successfuly ",
        data: result,
      })
})
const getSingleAcademicSemister =AsyncCatch(async(req:Request, res:Response)=>{
    const result = await AcademicSemisterServices.getSingleAcademicSemister(req.params.id)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic semister fatch successfuly ",
        data: result,
      })
})


const updateAcademicSemister = AsyncCatch(async(req:Request, res:Response)=>{

    const result = await AcademicSemisterServices.updateAcademicSemister(req.params.id,req.body)

    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic semister update successfuly ",
        data: result,
      })
})


export const AcademicSemister = {
    createAcademicSemister,
    getAcademicSemister,
    getSingleAcademicSemister,
    updateAcademicSemister
}