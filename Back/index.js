import express from "express";
import infraccionesRouter from "./src/routes/infracciones.routes.js";
import clasificacionesRouter from "./src/routes/clasificaciones.routes.js";

import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api', infraccionesRouter)
app.use('/api', clasificacionesRouter)

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});

export default app