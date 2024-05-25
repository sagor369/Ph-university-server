import { NextFunction, Request, Response } from "express";
export const GlobalError = (error:any, req:Request, res: Response, next:NextFunction) =>{
    let statusCode = 500
    let message = error.message || "Somthing went wroning"
    return res.status(statusCode).json({
      success: false,
      message: message,
    })
  }