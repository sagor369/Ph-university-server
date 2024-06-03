import { Router } from "express";
import { CourseValidate } from "./Course.validate";
import { CourseController } from "./Course.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";


const router = Router()
router.post("/create-course", ValidateRequest(CourseValidate), CourseController.createCourse)
router.get("/", CourseController.getCourse)
router.get("/:id", CourseController.getSingleCourse)
router.patch("/:id", CourseController.updateCourse)
router.delete("/:id", CourseController.deleetCourse)

export const CourseRouter = router