import express from "express";
import { createUser, loginUser, logoutUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/logout", logoutUser);

export default router;