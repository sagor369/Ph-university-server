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
 
  const oldId = await UserModel.findOne({role:"student"},{});

  user.id = "12000120"
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
