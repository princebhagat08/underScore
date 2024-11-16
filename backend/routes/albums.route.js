import express from "express";
import { getAlbums } from "../controller/albums.controller.js";

const router = express.Router();

router.get("/", getAlbums);

export default router;