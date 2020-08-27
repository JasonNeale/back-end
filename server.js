const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const songsRouter = require('./routes/songs')
const playlistsRouter = require('./routes/playlists')
const playlistsSongsRouter = require('./routes/playlist_songs')
const {logger} = require('./app/http/middleware/logger')
const server = express()


server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(logger)

server.use('/api/auth', authRouter)
server.use('/api/user', userRouter)
server.use('/api/songs', songsRouter)
server.use('/api/playlists', playlistsRouter)
server.use('/api/playlist_songs', playlistsSongsRouter)

server.get('/', (req, res) => {
  res.json({message: 'The API Server is live!'})
})


module.exports = server