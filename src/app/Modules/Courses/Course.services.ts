import mongoose from "mongoose";
import BuildsQuery from "../../Builds/QueryBuilds";
import { TCourse, TCourseFaculty } from "./Course.interface";
import { CourseFaculty, CourseModel } from "./Course.model";
import { AppError } from "../../Middlewares/CustomError";
import httpStatus from "http-status";

const createCourseInToDb = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};
const getCourseInToDb = async (query: Record<string, unknown>) => {
  const searchField = ["title", "prefix", "code"];
  const excludeFields = ["searchTerm", "sort", "page", "limit", "field"];
  const CourseQuery = new BuildsQuery(
    CourseModel.find().populate("preRequisteCourses.course"),
    query
  )
    .search(searchField)
    .filter(excludeFields)
    .limit()
    .paginat()
    .sort()
    .fields();
  const result = await CourseQuery.modelQuery;
  // const result = await CourseModel.find()
  return result;
};
const getSingleCourseInToDb = async (id: string) => {
  const result = await CourseModel.findById(id).populate(
    "preRequisteCourses.course"
  );
  return result;
};
const updateCourseInToDb = async (id: string, payload: TCourse) => {
  const { preRequisteCourses, ...courseRemainingData } = payload;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const updatesomeData = await CourseModel.findByIdAndUpdate(
      id,
      courseRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      }
    );
    if (!updatesomeData) {
      throw new AppError(httpStatus.BAD_REQUEST, "course data do not update ");
    }

    if (preRequisteCourses && preRequisteCourses.length > 0) {
      const deletedPreReCourse = preRequisteCourses
        .filter((el) => el.course && el.isDelete)
        .map((el) => el.course);
      const deletecourse = await CourseModel.findByIdAndUpdate(
        id,
        {
          $pull: {
            preRequisteCourses: { course: { $in: deletedPreReCourse } },
          },
        },
        {
          new: true,
          runValidators: true,
          session,
        }
      );

      if (!deletecourse) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "course data do not update "
        );
      }

      const addPreReqCourse = preRequisteCourses.filter(
        (el) => el.course && !el.isDelete
      );
      const addNewCourse = await CourseModel.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisteCourses: { $each: addPreReqCourse } },
        },
        {
          new: true,
          runValidators: true,
          session,
        }
      );
      if (!addNewCourse) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "course data do not update "
        );
      }
    }
    const result = await CourseModel.findById(id).populate(
      "preRequisteCourses.course"
    );
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err?.message);
  }
};
const courseAssignInToDb = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: payload } },
    },
    {
      upsert: true,
      new: true,
    },
  );
  return result;
};


const updateCourseAssignInToDb = async (
  id: string,
  payload: TCourseFaculty
) => {
  console.log(payload)
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payload } },
    },
    { upsert: true, new: true }
  );
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
  courseAssignInToDb,
  updateCourseAssignInToDb,
};
