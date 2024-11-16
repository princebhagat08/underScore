import express from "express";
import { getBanners } from "../controller/banner.controller.js";

const router = express.Router();

router.get("/", getBanners);

export default router;