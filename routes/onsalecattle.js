import express from "express";
import { addCattleToSale, getAllOnSaleCattle, getOneOnSaleCattle, removeCattleFromSale, updateCattleOnSaleStatus } from "../controllers/onsalecattle.js";

const router = express.Router();

router.get("/", getAllOnSaleCattle);
router.get("/specificonsalecattle", getOneOnSaleCattle);
router.post("/addcattletosale", addCattleToSale);
router.patch("/updatecattleonsalestatus/:cattle_id&:to_add", updateCattleOnSaleStatus);
router.delete("/removefromsale/:id", removeCattleFromSale)

export default router;
