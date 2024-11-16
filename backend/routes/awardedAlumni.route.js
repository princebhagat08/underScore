import express from "express";
import { getAwardedAlumni } from "../controller/awardedAlumni.js";

const router = express.Router();

router.get("/", getAwardedAlumni);

export default router;