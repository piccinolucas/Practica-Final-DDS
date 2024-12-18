import request from "supertest"
import app from "../../index.js"

describe('Test para clasificaciones', () =>{
    test('Test GET', async() =>{
        const resultados = await request(app).get('/api/clasificaciones')
        expect(resultados.status).toBe(200)
    })
})