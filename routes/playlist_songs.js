const router = require('express').Router()
const PlaylistSongs = require('../app/PlaylistSongs')
const restricted = require('../app/http/middleware/restricted')

/**
 * CREATE - POST Endpoints
*/
router.post('/:playlist_id/:song_id', restricted, (req, res) => {
    const { playlist_id, song_id } = req.params
  
    PlaylistSongs.add(playlist_id, song_id)
    .then((playlist) => {
        if(playlist.length > 0) {
            res.status(201).json(playlist)
        } else {
            res.status(404).json({error: `Could not get the playlist songs`})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
})


/**
 * READ - GET Endpoints
*/
router.get('/:playlist_id', restricted, (req, res) => {
    const { playlist_id } = req.params
  
    PlaylistSongs.findByPlaylistId(playlist_id)
    .then((allPLSongs) => {
        console.log('All playlist songs: ', allPLSongs)
        if(allPLSongs.length > 0) {
            res.status(200).json(allPLSongs)
        } else {
            res.status(404).json({error: `Could not find any songs for this playlist`})
        }
    })
    .catch(err => {res.status(500).json({error: err})})
})

/**
 * UPDATE - PUT Endpoints
*/


/**
 * DELETE - DELETE Endpoints
*/
router.delete('/:playlist_song_id', restricted, (req, res) => {
    const { playlist_song_id } = req.params
  
    PlaylistSongs.remove(playlist_song_id)
    .then(deleted => {res.status(204).end()})
    .catch(err => {res.status(500).json({error: `There was an error deleting the playlist song with ID: ${id}`})})
})


module.exports = router