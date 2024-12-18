import express from "express";
import { createInfraccion, getInfracciones, updateInfraccion } from "../controller/infracciones.controller.js";

const router = express.Router()

router.get("/infracciones", getInfracciones)
router.post("/infracciones", createInfraccion)
router.put("/infracciones", updateInfraccion)

export default router