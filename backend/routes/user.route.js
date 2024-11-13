import { Router } from "express";
import { getUsers, getUserById } from "../controller/user.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", isAuth, getUsers);
router.get("/:id", isAuth, getUserById);

export default router;