import express from "express";
import { StudentController } from "./Student.controller";
const router = express.Router();

router.get("/:studentId", StudentController.getIdByStudent);
router.get("/", StudentController.getStudent);
router.patch("/:studentId",StudentController.updateStudent);
router.delete("/:studentId", StudentController.deleteStudent);

export const StudentRoter = router;
