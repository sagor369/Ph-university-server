import BuildsQuery from "../../Builds/QueryBuilds";
import { TCourse } from "./Course.interface";
import { CourseModel } from "./Course.model";

const createCourseInToDb = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};
const getCourseInToDb = async (query: Record<string, unknown>) => {
    const searchField = ["title", "prefix", "code"];
  const excludeFields = ["searchTerm", "sort", "page", "limit", "field"];
    const CourseQuery =new BuildsQuery(CourseModel.find().populate("preRequisteCourses.course"),query).search(searchField).filter(excludeFields).limit().paginat().sort().fields()
  const result = await CourseQuery.modelQuery ;
  return result;
};
const getSingleCourseInToDb = async (id: string) => {
  const result = await CourseModel.findById(id);
  return result;
};
const updateCourseInToDb = async (id: string) => {
  const result = await CourseModel.findByIdAndUpdate(id, {
    $set: { isDelete: true },
  });
  return result;
};
const deleteCourseInToDb = async (id: string) => {
  const result = await CourseModel.findByIdAndUpdate(id, {
    $set: { isDelete: true },
  });
  return result;
};

export const CourseServices = {
  createCourseInToDb,
  getCourseInToDb,
  getSingleCourseInToDb,
  deleteCourseInToDb,
  updateCourseInToDb,
};
