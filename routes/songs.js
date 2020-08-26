const router = require('express').Router()
const Songs = require('../app/Songs')
const restricted = require('../app/http/middleware/restricted')

/**
 * CREATE - POST Endpoints
*/
router.post('/', restricted, (req, res) => {
  const song = req.body

  Songs.add(song)
  .then((newSong) => {
      if(newSong.length > 0) {
          res.status(201).json(newSong)
      } else {
          res.status(404).json({error: `Could not get the new song`})
      }
  })
  .catch(err => {res.status(500).json({error: err})})
})


/**
 * READ - GET Endpoints
*/
router.get('/', restricted, (req, res) => {
  
  Songs.find()
  .then((allSongs) => {
    console.log('All songs: ', allSongs)
    if(allSongs.length > 0) {
      res.status(200).json(allSongs)
    } else {
      res.status(404).json({error: `Could not find any songs`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

router.get('/:song_id', restricted, (req, res) => {
  const { song_id } = req.params
  
  Songs.findById(song_id)
  .then((song) => {
    if(song.length > 0) {
      res.status(200).json(song)
    } else {
      res.status(404).json({error: `Could not find the song with id: ${song_id}`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

/**
 * UPDATE - PUT Endpoints
*/
router.put('/:song_id', restricted, (req, res) => {
  const { song_id } = req.params
  const changes = req.body
  
  Songs.update(song_id, changes)
  .then((updated_song) => {
      res.status(201).json(updated_song)
  })
  .catch(err => {res.status(500).json({error: err})})
})

/**
 * DELETE - DELETE Endpoints
*/
router.delete('/:song_id', restricted, (req, res) => {
  const { song_id } = req.params

  Songs.remove(song_id)
  .then(deleted => {res.status(204).end()})
  .catch(err => {res.status(500).json({error: `There was an error deleting the song with ID: ${id}`})})
})



module.exports = router