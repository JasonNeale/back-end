const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./routes/auth')
const server = express()


server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.json({ message: 'The API Server is live!' })
})

module.exports = server