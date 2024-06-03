import { TAcademic } from "../AcademicSemister/AcademicSemister.interface";
import { UserModel } from "./User.model";

export const findtId = async (payload:string) => {
  const studentsId = await UserModel.findOne(
    {
      role: payload,
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

export const genaretadStudentId = async (payload:any) => {
  let currentId:string  = (0).toString();
  const lastId = await findtId("student")
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

export const genaretadFacultyId = async(payload:string) =>{
  let currentId = (0).toString()
  const lastId =await findtId(payload)
  if(lastId){
    currentId =lastId?.substring(2)
  }
  let incrementId = (Number(currentId)+ 1).toString().padStart(4, "0")
  incrementId = `${payload === "admin" ? "A":"F"}-${incrementId}`
  return incrementId
}
export const genaretadAdminyId = async() =>{
  let currentId = (0).toString()
  const lastId =await findtId("admin")
  if(lastId){
    currentId =lastId?.substring(2)
  }
  let incrementId = (Number(currentId)+ 1).toString().padStart(4, "0")
  incrementId = `F-${incrementId}`
  return incrementId
}
