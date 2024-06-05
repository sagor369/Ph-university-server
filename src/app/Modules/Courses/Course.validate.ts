import { z } from "zod";
const preRequisteCoursesValidation = z.object({
  course: z.string(),
  isDelete: z.boolean().optional(),
});
const updatepreRequisteCoursesValidation = z.object({
  course: z.string().optional(),
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
export const updateCourseValidate = z.object({
  data: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    creadits: z.number().optional(),
    preRequisteCourses: z.array(updatepreRequisteCoursesValidation).optional(),
  }),
});

export const courseAddToFaculty = z.object({
data: z.object({
  faculties: z.array(z.string())
})  
});
