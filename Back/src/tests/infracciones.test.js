import request from "supertest"
import app from "../../index.js"

describe('Test para infracciones', () => {
    test('Test GET', async() =>{
        const resultados = await request(app).get('/api/infracciones')
        expect(resultados.status).toBe(200)
    })
}
)

describe('Test para crear infracciones', () => {
    test('Test POST', async () =>  {
        const body = { Dni: "44653692", Fecha: "2024-11-13", Importe: 500, Lugar:"Ruta 20", Eliminado: "0", IdClasificacion: 2}
        const resultado = await request(app).post('/api/infracciones').send(body)
        expect(resultado.status).toBe(201)
    })
}
)