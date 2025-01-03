import { Router } from "express";
import { srwcController } from "../controllers/srwc.controller.js";

export const router = Router();

router.get("/srwc", srwcController);
