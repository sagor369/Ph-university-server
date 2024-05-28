import config from "../../../config";
import { TAcademic } from "../AcademicSemister/AcademicSemister.interface";
import { AcademicModel } from "../AcademicSemister/AcademicSemister.model";
import { TStudent } from "../Student/Student.interface";
import { Students } from "../Student/Student.model";
import { TUsers } from "./User.interface";
import { UserModel } from "./User.model";
import { genaretadId } from "./user.utils";

const createStudentDB = async (password: string, StudentData: TStudent) => {
  const user: Partial<TUsers> = {};

  user.password = password || config.default_password as string;
 const admissionSemester =await AcademicModel.findById(StudentData.admissionSemester)
 

  user.id = await genaretadId(admissionSemester )
  user.role = "student";

  const NewUser = await UserModel.create(user);
  if (Object.keys(NewUser).length) {
    StudentData.user = NewUser._id;
    StudentData.id = NewUser.id;

    const createStudent = await Students.create(StudentData);
    return createStudent;
  } else {
    console.log("data crate korte parinai");
    return { message: " not crate a user " };
  }
};

export const UserService = {
  createStudentDB,
};
