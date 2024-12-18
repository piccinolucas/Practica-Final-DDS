import express from "express"
import getClasificaciones from "../controller/clasificaciones.controller.js"

const router = express.Router()

router.get("/clasificaciones", getClasificaciones)

export default router
