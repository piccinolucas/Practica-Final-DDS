import Clasificaciones from "../models/clasificacion.js";

const getClasificaciones = async (req, res) => {
    try {
        const clasificaciones = await Clasificaciones.findAll()
        res.json(clasificaciones).status(200)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default getClasificaciones;