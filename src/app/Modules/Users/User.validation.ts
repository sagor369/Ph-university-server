import { z } from "zod";

const UserValidation = z.object({
  password: z
    .string({
      invalid_type_error: "password must be string",
    })
    .max(20, { message: "must be less then 20 charechter" })
    .optional(),
});
