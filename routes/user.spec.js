const server = require('../server')
const db = require('../config/dbConfig')
const request = require('supertest')


const usera = {username: 'TestUserA', password: '1234567890'}
const userb = {username: 'TestUserB', password: '1234567890'}
const createUser1 = request(server).post('/api/auth/register').send(usera)
const createUser2 = request(server).post('/api/auth/register').send(userb)
const updateUser2 = createUser2.first_name = "John"

describe('User Route Tests', () => {
    it('/friends - should return 201 (created)', () => {
        const friendship = ({follower: createUser1.id, following: createUser2.id})
        const runTest = request(server).post('/api/user/friends').send(friendship).expect(201)
    })
  
    it('/:id - should return 404 (not found)', async () => {
      const runTest = await request(server).post(`/api/user/55`).send('').expect(404)
    })
  
    it('/followers/:id - should return 200 (ok)', () => {
      const runTest = request(server).post(`/api/user/followers/${createUser1.id}`).send(``).expect(200)
    })
  
    it('/following/:id - should return 200 (ok)', () => {
      const runTest = request(server).post(`/api/user/following/${createUser2.id}`).send(``).expect(200)
    })
  
    it('/update/:id - should return 201 (created)', () => {
      const runTest = request(server).post(`/api/user/update/${createUser2.id}`).send(updateUser2).expect(201)
    })
  
    it('/delete/:id - should return 204 (server error)', () => {
      const runTest = request(server).post(`/api/user/delete/${createUser2.id}`).send(``).expect(204)
    })
  })