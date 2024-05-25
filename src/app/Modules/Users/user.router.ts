import express from "express";
import { UserController } from "./User.controller";

const router = express.Router();

router.post("/create-user", UserController.creatStudent);
router.get("/:userId");
router.get("/");
router.delete("/:usertId");

export const UserRouter = router;
