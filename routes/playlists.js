const router = require('express').Router()
const Playlists = require('../app/Playlists')

/**
 * CREATE - POST Endpoints
*/
router.post('/', (req, res) => {
    const playlist = req.body
  
    Playlists.add(playlist)
    .then((newPlaylist) => {
        if(newPlaylist.length > 0) {
            res.status(201).json(newPlaylist)
        } else {
            res.status(404).json({error: `Could not get the playlist`})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
})


/**
 * READ - GET Endpoints
*/
router.get('/:user_id', (req, res) => {
    const { user_id } = req.params
  
    Playlists.findByUserId(user_id)
    .then((allPlaylists) => {
        if(allPlaylists.length > 0) {
            res.status(200).json(allPlaylists)
        } else {
            res.status(404).json({error: `Could not find any playlists`})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
})

router.get('/pl/:playlist_id', (req, res) => {
    const { playlist_id } = req.params

    Playlists.findById(playlist_id)
    .then((allPlaylists) => {
        if(allPlaylists.length > 0) {
            res.status(200).json(allPlaylists)
        } else {
            res.status(404).json({error: `Could not find any playlists`})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
})

/**
 * UPDATE - PUT Endpoints
*/
router.put('/:playlist_id', (req, res) => {
    const { playlist_id } = req.params
    const changes = req.body
  
    Playlists.update(playlist_id, changes)
    .then((updated) => {res.status(201).json(updated)})
    .catch(err => {res.status(500).json({error: err})})
})

/**
 * DELETE - DELETE Endpoints
*/
router.delete('/:playlist_id', (req, res) => {
    const { playlist_id } = req.params
  
    Playlists.remove(playlist_id)
    .then(deleted => {res.status(204).end()})
    .catch(err => {res.status(500).json({error: `There was an error deleting the playlist with ID: ${id}`})})
  })

module.exports = router