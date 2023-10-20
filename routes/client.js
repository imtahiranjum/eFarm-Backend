import express from "express";
import {
    getStaff,
    getEmployee,
    
} from "../controllers/client.js";
const router = express.Router();


router.get("/staff", getStaff);
router.get("/employee/:id", getEmployee);


export default router;