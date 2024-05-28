import { z } from "zod";
import { AcademicCode, AcademicName, month } from "./conastan";

export const validateData = z.object({
  data: z.object({
    AcademicName: z.enum([...AcademicName] as [string, ...string[]]),
    AcademicCode: z.enum([...AcademicCode] as [string, ...string[]]),
    year: z.string(),
    studentId: z.string(),
    startMonth: z.enum([...month] as [string, ...string[]]),
    endMonth: z.enum([...month] as [string, ...string[]]),
  }),
});

export const updateValidataData = z.object({
  data: z.object({
    AcademicName: z.enum([...AcademicName] as [string, ...string[]]).optional(),
    AcademicCode: z.enum([...AcademicCode] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...month] as [string, ...string[]]).optional(),
    endMonth: z.enum([...month] as [string, ...string[]]).optional(),
  }),
})
