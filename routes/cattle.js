import express from "express";
import { createCattle, getCattle } from "../controllers/cattle.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/create", auth, createCattle)

export default router;