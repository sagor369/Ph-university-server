import { TAcademic } from "./AcademicSemister.interface";
import { AcademicModel } from "./AcademicSemister.model";
import { academesemesterMapper } from "./conastan";

const postAcademicSemister = async (payload: TAcademic) => {
  if (academesemesterMapper[payload.AcademicName] !== payload.AcademicCode) {
    throw new Error("Academic code not a mutch ");
  }

  const result = await AcademicModel.create(payload);
  return result;
};

const getAcademicSemister = async() =>{
    const result = AcademicModel.find()
    return result
}
const getSingleAcademicSemister = async(id:string) =>{
    const result = AcademicModel.findById(id)
    return result
}

const updateAcademicSemister = async (
  id: string,
  payload: Partial<TAcademic>
) => {
  if (
    payload.AcademicName &&
    payload.AcademicCode &&
    academesemesterMapper[payload.AcademicName] !== payload.AcademicCode
  ) {
    throw new Error("Invalid semester code ");
  }

  const result = await AcademicModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemisterServices = {
  postAcademicSemister,
  getAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
