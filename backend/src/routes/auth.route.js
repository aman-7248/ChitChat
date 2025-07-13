import express from "express";
import {signup } from "../controllers/auth.controller.js";
import {checkAuth} from "../controllers/auth.controller.js";
const router=express.Router();

router.post("/signup",signup);

router.get("/check", checkAuth);
export default router;