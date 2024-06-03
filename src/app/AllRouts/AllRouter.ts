import { Router } from "express";
import { UserRouter } from "../Modules/Users/user.router";
import { StudentRoter } from "../Modules/Student/Student.router";
import { AcademicSemisterRouter } from "../Modules/AcademicSemister/AcademicSemister.route";
import { FacultyRouter } from "../Modules/AcademicFaculty/AcademicFaculty.router";
import { AcademicDepertment } from "../Modules/AcademicDepertment/depertment.router";
import { CourseRouter } from "../Modules/Courses/Course.router";

const router = Router();
const routerModel = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/student",
    route: StudentRoter,
  },
  {
    path: "/academic-semister",
    route: AcademicSemisterRouter,
  },
  {
    path: "/academic-faculty",
    route: FacultyRouter,
  },
  {
    path: "/academic-depertment",
    route: AcademicDepertment ,
  },
  {
    path: "/courses",
    route: CourseRouter ,
  },
];

routerModel.forEach((rout) => router.use(rout.path, rout.route));

export default router;
