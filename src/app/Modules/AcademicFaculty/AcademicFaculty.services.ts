import { TAcademicFaculty } from "./AcademicFaculty.interface";
import { FacultyModel } from "./AcademinFaculty.model";

const createFacultyInToDB = async (payload: TAcademicFaculty) => {
  const result = await FacultyModel.create(payload);
  return result;
};

const getFacultyInToDb = async () => {
  const result = await FacultyModel.find({isDelete:false});
  return result;
};
const getSingleFacultyInToDb = async (id: string) => {
  const result = await FacultyModel.findOne({_id:id, isDelete:false});
  return result;
};
const updateFacultyInToDb = async (id: string, payload: TAcademicFaculty) => {
  const result = await FacultyModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
const deleteFacultyInToDb = async (id: string) => {
  const deleteId = {
    $set: {
      isDelete: true,
    },
  };
  const result = await FacultyModel.findByIdAndUpdate(id, deleteId, {new: false});
  return result;
};

export const AcademicFacyltyServices = {
  createFacultyInToDB,
  getFacultyInToDb,
  getSingleFacultyInToDb,
  updateFacultyInToDb,
  deleteFacultyInToDb
};
