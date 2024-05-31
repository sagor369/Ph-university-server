import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { TerrorSources } from "../ErrorInterface/errorSources.type";
import { HandleZodError } from "../ErrorFunction/ZodError";
export const GlobalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message =  "Somthing went wroning";

  let errorSources: TerrorSources = [
    {
      path: "",
      message: "",
    },
  ];

  if (error instanceof ZodError) {
    const simplifiedError = HandleZodError(error);
    (statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorSources = simplifiedError.errorSources);
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
  });
};
