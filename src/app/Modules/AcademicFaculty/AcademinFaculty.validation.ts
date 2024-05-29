import { z } from "zod";

export const  facultyValidation = z.object({
    data: z.object({
        name: z.string()
    })
})
export const  updatefacultyValidation = z.object({
    name: z.string().optional()
})