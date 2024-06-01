import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TerrorSources } from "../ErrorInterface/errorSources.type";
import { HandleZodError } from "../ErrorFunction/ZodError";
import ValidationError from "../ErrorFunction/mongooseValidationError";
import CastErrorhandler from "../ErrorFunction/mongooseCastError";
import DublicatErrorHandler from "../ErrorFunction/mongooseDublicatError";
import { AppError } from "./CustomError";
export const GlobalError: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Somthing went wroning";

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
  } else if (error?.name === "ValidationError") {
    const simplifiedError = ValidationError(error);
    (statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorSources = simplifiedError.errorSources);
  } else if (error?.name === "CastError") {
    const simplifiedError = CastErrorhandler(error);
    (statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorSources = simplifiedError.errorSources);
  } else if (error?.code === 11000) {
    const simplifiedError = DublicatErrorHandler(error);
    (statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorSources = simplifiedError.errorSources);
  } else if (error instanceof AppError) {
    (statusCode = error?.statusCode),
      (message = error?.message),
      (errorSources = [
        {
          path: "",
          message: error?.message,
        },
      ]);
  } else if (error === Error) {
    (message = error?.message),
      (errorSources = [
        {
          path: "",
          message: error?.message,
        },
      ]);
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    stack: error.stack,
    error,
  });
};
