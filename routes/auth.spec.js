const server = require('../server')
const db = require('../config/dbConfig')
const request = require('supertest')


const usera = {username: 'TestUserA', password: '1234567890'}
const userb = {username: 'TestUserB', password: '1234567890'}

describe('Auth Route Tests', () => {
  
  it('/register - should return 201 (created)', () => {
    const runTest = request(server).post('/api/auth/register').send(usera).expect(201)
  })

  it('/register - should return 400 (bad request)', async () => {
    const runTest = await request(server).post('/api/auth/register').send('').expect(400)
  })

  it('/login - should return 401 (not found)', () => {
    const runTest = request(server).post('/api/auth/login').send({username: 'JoeBiden', password: '987654321'}).expect(401)
  })

  it('/login - should return 500 (server error)', () => {
    const runTest = request(server).post('/api/auth/login').send(usera+usera).expect(500)
  })
})