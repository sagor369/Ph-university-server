import { Router } from "express";
import { AcademicFacultyController } from "./AcademicFaculty.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";
import { facultyValidation } from "./AcademinFaculty.validation";

const router = Router();

router.post(
  "/create-faculty",
  ValidateRequest(facultyValidation),
  AcademicFacultyController.crateFaculty
);

router.get("/", AcademicFacultyController.getFaculty);
router.get("/:facultyId", AcademicFacultyController.getsingleFaculty);
router.patch("/:facultyId", AcademicFacultyController.updateFaculty);
router.delete("/:facultyId", AcademicFacultyController.deleteFaculty);
export const FacultyRouter = router;
