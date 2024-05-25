import { Router } from "express";
import { UserRouter } from "../Modules/Users/user.router";
import { StudentRoter } from "../Modules/Student/Student.router";

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
];

routerModel.forEach((rout) => router.use(rout.path, rout.route));

export default router;
