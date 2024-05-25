import { z } from "zod";
const NameValidate = z.object({
  fristName: z.string(),
  middelName: z.string(),
  lastName: z.string(),
});

const StudentValidat = z.object({
  name: NameValidate,
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
