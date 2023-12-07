import express from "express";
import { createCattle, getAllCattle } from "../controllers/cattle.js";
import { auth } from "../middleware/auth.js";
import multer from "multer";
const router = express.Router();

router.get("/all", getAllCattle);
router.post("/create", createCattle);

export default router;
