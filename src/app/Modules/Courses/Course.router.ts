import { Router } from "express";
import { CourseValidate, updateCourseValidate } from "./Course.validate";
import { CourseController } from "./Course.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";


const router = Router()
router.post("/create-course", ValidateRequest(CourseValidate), CourseController.createCourse)
router.get("/", CourseController.getCourse)
router.get("/:id", CourseController.getSingleCourse)
router.put("/:courseId/assign-course", CourseController.AssignCourseFaculty)
router.patch("/:id",ValidateRequest(updateCourseValidate), CourseController.updateCourse)
router.delete("/:id", CourseController.deleteCourse)

export const CourseRouter = router