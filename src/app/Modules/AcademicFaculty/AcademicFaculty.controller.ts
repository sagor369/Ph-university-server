import { Request, Response } from "express";
import { AsyncCatch, SendRespons } from "../../utils/AsycnCatch";
import httpStatus from "http-status";
import { AcademicFacyltyServices } from "./AcademicFaculty.services";

const crateFaculty = AsyncCatch(async (req: Request, res: Response) => {
  const result = await AcademicFacyltyServices.createFacultyInToDB(req.body);

  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty create successfuly ",
    data: result,
  });
});

const getFaculty = AsyncCatch(async (req: Request, res: Response) => {
  const result = await AcademicFacyltyServices.getFacultyInToDb();

  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty fatch successfuly ",
    data: result,
  });
});
const getsingleFaculty = AsyncCatch(async (req: Request, res: Response) => {
  const result = await AcademicFacyltyServices.getSingleFacultyInToDb(
    req.params.facultyId
  );

  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty fatch successfuly ",
    data: result,
  });
});
const updateFaculty = AsyncCatch(async (req: Request, res: Response) => {
  const result = await AcademicFacyltyServices.updateFacultyInToDb(
    req.params.facultyId,
    req.body
  );

  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty update successfuly ",
    data: result,
  });
});
const deleteFaculty = AsyncCatch(async (req: Request, res: Response) => {
  const result = await AcademicFacyltyServices.deleteFacultyInToDb(
    req.params.facultyId
  );

  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty delete successfuly ",
    data : result
  });
});

export const AcademicFacultyController = {
  crateFaculty,
  getFaculty,
  getsingleFaculty,
  updateFaculty,
  deleteFaculty,
};
