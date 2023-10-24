import express from "express";
import { getDashboardStats, getSeller } from "../controllers/general.js";


const router = express.Router();

router.get("/dashboard", getDashboardStats);
router.get("/seller/:id", getSeller);

export default router;