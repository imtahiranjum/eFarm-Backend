import express from "express";
import {
    getStaff,
    getDoctor,
    getEmployee,
    
} from "../controllers/client.js";
const router = express.Router();


router.get("/staff", getStaff);
router.get("/doctors", getDoctor);
router.get("/employee/:id", getEmployee);


export default router;