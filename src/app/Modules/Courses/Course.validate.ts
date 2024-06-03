import { z } from "zod";
const preRequisteCoursesValidation = z.object({
  course: z.string(),
  isDelete: z.boolean().optional(),
});

export const CourseValidate = z.object({
  data: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    creadits: z.number(),
    preRequisteCourses: z.array(preRequisteCoursesValidation).optional(),
  }),
});
export const optionalCourseValidate = z.object({
  data: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    creadits: z.number().optional(),
    preRequisteCourses: z.array(preRequisteCoursesValidation).optional(),
  }),
});
