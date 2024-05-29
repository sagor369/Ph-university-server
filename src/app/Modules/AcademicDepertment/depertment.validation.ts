import { z } from "zod";


export const ValidateDepertment = z.object({
    data: z.object({
        name: z.string({invalid_type_error: "name is string "}),
        academinFaculty: z.string({invalid_type_error: "name is string "})
    })
})
export const updateValidateDepertment = z.object({
    data: z.object({
        name: z.string({invalid_type_error: "name is string "}).optional(),
        academinFaculty: z.string({invalid_type_error: "name is string "}).optional()
    })
})