import config from "../../../config";
import { TStudent } from "../Student/Student.interface";
import { Students } from "../Student/Student.model";
import { TUsers } from "./User.interface";
import { UserModel } from "./User.model";

const createStudentDB = async (password: string, StudentData: TStudent) => {
  const user: Partial<TUsers> = {};
  if (!password) {
    user.password = config.default_password as string;
  } else {
    user.password = password;
  }
  user.id = "202405250010";
  user.role = "student";
  //   const createStudent = await Students.create(StudentData)
  //   console.log(createStudent)
  //     return createStudent

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
