import { Types } from "mongoose";

export type TpreRequist = {
    course: Types.ObjectId
    isDelete: boolean
}

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  creadits: number;
  preRequisteCourses:[TpreRequist]
};

export type TCourseFaculty = {
  course: Types.ObjectId
  facultys: [Types.ObjectId]
}
