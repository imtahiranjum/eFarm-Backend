import express from "express";
import { addCattleToSale, getOnSaleCattle, getOneOnSaleCattle } from "../controllers/onsalecattle.js";

const router = express.Router();

router.get("/", getOnSaleCattle);
router.get("/specificonsalecattle", getOneOnSaleCattle);
router.post("/addcattletosale", addCattleToSale);

export default router;
