import express from "express";
import { addAnswer, addQuestion, getDashboardStats, getSeller } from "../controllers/general.js";


const router = express.Router();

router.get("/dashboard", getDashboardStats);
router.get("/seller/:id", getSeller);
router.post("/addquestion", addQuestion);
router.post("/addanswer", addAnswer);

export default router;