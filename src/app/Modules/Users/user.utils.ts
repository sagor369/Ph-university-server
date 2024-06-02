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
  return studentsId?.id ? studentsId?.id : undefined;
};

export const genaretadId = async (payload:any) => {
  let currentId:string  = (0).toString();
  const lastId = await findStudentId()
    const lastyear = lastId?.substring(0, 4) 
    const lastSemisterCode  = lastId?.substring(4, 6)
    const currentYear = payload?.year
    const currentSemisterCode = payload?.AcademicCode
    if(lastyear === currentYear && lastSemisterCode === currentSemisterCode){
        currentId = lastId?.substring(6) as string
    }

  let increment = (Number(currentId) + 1).toString().padStart(4, "0");
  increment = `${currentYear}${currentSemisterCode}${increment}`;
  return increment;
};
