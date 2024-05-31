import express from "express";
import { UserController } from "./User.controller";
import { StudentValidat } from "../Student/Student.validation";
import { ValidateRequest } from "../../Middlewares/dataValidation";

const router = express.Router();

router.post("/create-student+",ValidateRequest(StudentValidat), UserController.creatStudent);
router.get("/:userId");
router.get("/");
router.delete("/:usertId");

export const UserRouter = router;
