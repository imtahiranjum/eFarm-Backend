import express from "express";
import { createSeller, createUser, getUser, getUserByEmail, loginUser, logoutUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.post("/createseller", createSeller);
router.get("/id/:id", getUser);
router.get("/email/:email", getUserByEmail);
router.post("/logout", logoutUser);

export default router;