import express from "express";
import { createUser, getUser, getUserId, loginUser, logoutUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/:id", getUser);
router.get("/:email", getUserId);
router.get("/logout", logoutUser);

export default router;