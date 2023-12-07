import express from "express";
import { addToFavorite, createSeller, createUser, getSellerByEmail, getSellerById, getUser, getUserByEmail, loginUser, logoutUser, removeFromFavorite } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.post("/createseller", createSeller);
router.get("/id/:id", getUser);
router.get("/seller/id/:id", getSellerById);
router.get("/seller/email/:email", getSellerByEmail);
router.get("/email/:email", getUserByEmail);
router.post("/addtofavorite", addToFavorite);
router.delete("/removefromfavorite", removeFromFavorite);
router.post("/logout", logoutUser);

export default router;