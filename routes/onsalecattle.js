import express from "express";
import {
  addCattleToSale,
  getAllOnSaleCattle,
  getOneOnSaleCattle,
  getOneOnSaleCattleImages,
  removeCattleFromSale,
  updateCattleOnSaleStatus,
} from "../controllers/onsalecattle.js";
import multer from "multer";

const router = express.Router();

router.get("/", getAllOnSaleCattle);
router.get("/specificonsalecattle/:id", getOneOnSaleCattle);
router.get("/getonsalecattleimages/:id", getOneOnSaleCattleImages);
router.post("/addcattletosale", addCattleToSale);
router.patch(
  "/updatecattleonsalestatus/:cattle_id&:to_add",
  updateCattleOnSaleStatus
);
router.delete("/removefromsale/:id", removeCattleFromSale);

export default router;
