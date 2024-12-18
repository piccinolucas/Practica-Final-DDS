import Infracciones from "../models/infraccion.js";

export const getInfracciones = async(req, res) => {
    try {
        const infracciones = await Infracciones.findAll()
        res.json(infracciones).status(200)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
}


export const createInfraccion = async(req, res) => {
    try {
        const { Dni, Fecha, Importe, Lugar, Eliminado, IdClasificacion } = req.body
        const newInfraccion = await Infracciones.create({ Dni, Fecha, Importe, Lugar, Eliminado, IdClasificacion })
        res.status(201).json(newInfraccion)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const updateInfraccion = async(req, res) => {
    try {
        const { Id } = req.params
        const { Titulo, Director, IdClasificacion } = req.body
        const infraccion = await Infracciones.findOne({
            where: {Id: Id, Eliminado: false}
        })

        if(!infraccion){
            return res.status(404).json({ error: "No encontrado. Ups!"})
        }

        await Infracciones.update(
            { Titulo, Director, IdClasificacion },
            { where: {Id: Id}}
        )
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
