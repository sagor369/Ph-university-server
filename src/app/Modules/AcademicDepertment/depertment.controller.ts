import { Request, Response } from "express";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import httpStatus from "http-status";
import { DepertmentServices } from "./depertment.services";


const createDepertment = AsyncCatch(async(req:Request, res: Response) =>{
    const result = await DepertmentServices.createDepertmentInToDb(req.body)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Academic depertment create successfuly ",
      data: result,
    });
})
const getDepertment = AsyncCatch(async(req:Request, res: Response) =>{
    const result = await DepertmentServices.getDepertmentInToDb()
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Academic depertment fetch successfuly ",
      data: result,
    });
})
const getsingleDepertment = AsyncCatch(async(req:Request, res: Response) =>{
    const result = await DepertmentServices.getSingleDepertmentInToDb(req.params.depertmentId)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Academic depertment fetch successfuly ",
      data: result,
    });
})
const updateDepertment = AsyncCatch(async(req:Request, res: Response) =>{
    const result = await DepertmentServices.updateDepertmentInToDb(req.params.depertmentId, req.body)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Academic depertment update successfuly ",
      data: result,
    });
})
const deleteDepertment = AsyncCatch(async(req:Request, res: Response) =>{
    const result = await DepertmentServices.deleteDepertmentInToDb(req.params.depertmentId)
    SendRespons(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Academic depertment delete successfuly ",
      data: result,
    });
})


export const depertmentController = {
    createDepertment,
    getDepertment,
    getsingleDepertment,
    updateDepertment,
    deleteDepertment
}