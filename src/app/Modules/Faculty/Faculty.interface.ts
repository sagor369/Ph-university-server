import { Types } from "mongoose";

export type TGender = 'male' | 'female' | 'other';

export type TUserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: TUserName;
  gender: TGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
  academicDepartment: Types.ObjectId;
};