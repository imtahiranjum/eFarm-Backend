import express from "express";
import {
  addCattleToSale,
  getAllOnSaleCattle,
  getOneOnSaleCattle,
  getOneOnSaleCattleDetails,
  getOneOnSaleCattleImages,
  removeCattleFromSale,
  updateCattleOnSaleStatus,
} from "../controllers/onsalecattle.js";

const router = express.Router();

router.get("/", getAllOnSaleCattle);
router.get("/specificonsalecattle/:id", getOneOnSaleCattle);
router.get("/getonsalecattleimages/:id", getOneOnSaleCattleImages);
router.get("/getonsalecattledetails/:id", getOneOnSaleCattleDetails);
router.post("/addcattletosale", addCattleToSale);
router.patch(
  "/updatecattleonsalestatus/:cattle_id&:to_add",
  updateCattleOnSaleStatus
);
router.delete("/removefromsale/:id", removeCattleFromSale);

export default router;
