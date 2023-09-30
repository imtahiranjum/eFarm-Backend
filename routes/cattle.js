import express from "express";
import { createCattle, getAllCattle } from "../controllers/cattle.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/all", getAllCattle)
router.post("/create", auth, createCattle)


export default router;