import express from "express";
import { getNewsAndStories } from "../controller/newAndStores.js";

const router = express.Router();

router.get("/", getNewsAndStories);

export default router;