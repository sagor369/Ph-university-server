import express from "express";
import { StudentController } from "./Student.controller";
const router = express.Router();

router.get("/:studentId");
router.get("/", StudentController.getStudent);
router.put("/:studentId");
router.delete("/:studentId");

export const StudentRoter = router;
