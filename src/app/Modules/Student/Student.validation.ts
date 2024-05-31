import { z } from "zod";
// const NameValidate = ;

export const StudentValidat = z.object({
  name: z.object({
    fristName: z.string({required_error: "frist name is requard"}),
    middelName: z.string(),
    lastName: z.string({required_error: "last name is requard"}),
  }),
  age: z.number(),
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.date(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: z.string(),
  localGuardian: z.string(),
  profileImage: z.string(),
});
