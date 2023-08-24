import express from "express";
import { addCattleToSale, getOnSaleCattle } from "../controllers/onsalecattle.js";

const router = express.Router();

router.get("/onsalecattle", getOnSaleCattle);
router.post("/addcattletosale", addCattleToSale);

export default router;
