import { Types } from "mongoose";

export type TName = {
  firstName: string;
  middelName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: TName;
  age: number;
  user: Types.ObjectId;
  gender: "male" | "female" | "other";
  dateOfBirth: Date;
  email: string;
  admissionSemester: Types.ObjectId;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: string;
  localGuardian: string;
  profileImage: string;
};
