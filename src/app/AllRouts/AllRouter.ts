import { Router } from "express";
import { UserRouter } from "../Modules/Users/user.router";
import { StudentRoter } from "../Modules/Student/Student.router";
import { AcademicSemisterRouter } from "../Modules/AcademicSemister/AcademicSemister.route";

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
    path: "/academin-semister",
    route: AcademicSemisterRouter,
  },
];

routerModel.forEach((rout) => router.use(rout.path, rout.route));

export default router;
