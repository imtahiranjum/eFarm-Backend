import express from "express";
import { addToFavorite, changeProfileBio, changeProfileImage, changeSellerDescription, createSeller, createUser, getSellerByEmail, getSellerById, getUser, getUserByEmail, loginUser, logoutUser, removeFromFavorite } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.post("/createseller", createSeller);
router.get("/id/:id", getUser);
router.get("/seller/id/:id", getSellerById);
router.get("/seller/email/:email", getSellerByEmail);
router.get("/email/:email", getUserByEmail);
router.post("/addtofavorite", addToFavorite);
router.post("/changeprofileimage", changeProfileImage);
router.post("/changeprofilebio", changeProfileBio);
router.post("/changesellerdescription", changeSellerDescription);
router.delete("/removefromfavorite", removeFromFavorite);
router.post("/logout", logoutUser);

export default router;