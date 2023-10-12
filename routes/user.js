import express from "express";
import { createUser, getUser, getUserByEmail, loginUser, logoutUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/id/:id", getUser);
router.get("/email/:email", getUserByEmail);
router.post("/logout", logoutUser);

export default router;