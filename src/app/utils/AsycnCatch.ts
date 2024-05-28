import { NextFunction, Request, RequestHandler, Response } from "express";
import { GlobalError } from "../Middlewares/GlobalErrorHandler";

export const AsyncCatch = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export const SendRespons = <T>(
  res: Response,
  data: { statusCode: number; success: true; message: string; data: T }
) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
