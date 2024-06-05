import { Router } from "express";
import { courseAddToFaculty, CourseValidate, updateCourseValidate } from "./Course.validate";
import { CourseController } from "./Course.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";


const router = Router()
router.post("/create-course", ValidateRequest(CourseValidate), CourseController.createCourse)
router.get("/", CourseController.getCourse)
router.get("/:id", CourseController.getSingleCourse)
router.put("/:courseId/assign-course",ValidateRequest(courseAddToFaculty), CourseController.AssignCourseFaculty)
router.delete("/:courseId/delete-course",ValidateRequest(courseAddToFaculty), CourseController.DeleteCourseFaculty)
router.patch("/:id",ValidateRequest(updateCourseValidate), CourseController.updateCourse)
router.delete("/:id", CourseController.deleteCourse)

export const CourseRouter = router