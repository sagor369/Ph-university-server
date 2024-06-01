import { Router } from "express";
import { depertmentController } from "./depertment.controller";
import { ValidateRequest } from "../../Middlewares/dataValidation";
import { ValidateDepertment } from "./depertment.validation";

const router = Router();

router.post("/create-depertment",
// ValidateRequest(ValidateDepertment) ,
depertmentController.createDepertment);
router.get("/:depertmentId", depertmentController.getsingleDepertment)
router.get("/", depertmentController.getDepertment)
router.patch("/:depertmentId", depertmentController.updateDepertment)
router.delete("/:depertmentId", depertmentController.deleteDepertment)

export const AcademicDepertment = router;
