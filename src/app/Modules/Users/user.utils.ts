import { TAcademic } from "../AcademicSemister/AcademicSemister.interface";
import { UserModel } from "./User.model";

export const findStudentId = async () => {
  const studentsId = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return studentsId?.id ? studentsId?.id.substring(6) : undefined;
};

export const genaretadId = async (payload: TAcademic) => {
  const currentId = (await findStudentId()) || (0).toString();
  let increment = (Number(currentId) + 1).toString().padStart(4, "0");
  increment = `${payload.year}${payload.AcademicCode}${increment}`;
  return increment;
};
