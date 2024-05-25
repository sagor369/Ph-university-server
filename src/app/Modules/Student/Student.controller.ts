import { Request, Response } from "express";

const getStudent = async (req: Request, res: Response) => {};

const getIdByStudent = (req: Request, res: Response) => {};

const updateStudent = (req: Request, res: Response) => {};

const deleteStudent = (req: Request, res: Response) => {};

export const StudentController = {
  getStudent,
  getIdByStudent,
  updateStudent,
  deleteStudent,
};
