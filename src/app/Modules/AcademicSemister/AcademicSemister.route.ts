import { Router } from "express";
import { AcademicSemister } from "./AcademicSemister.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";
import { updateValidataData, validateData } from "./AcademicValidation";

const router = Router()

router.post("/create-semister",ValidateRequest(validateData), AcademicSemister.createAcademicSemister)
router.get("/", AcademicSemister.getAcademicSemister)
router.get("/id", AcademicSemister.getSingleAcademicSemister)
router.patch("/:id", ValidateRequest(updateValidataData), AcademicSemister.updateAcademicSemister )



export const AcademicSemisterRouter =  router