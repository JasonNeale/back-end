const router = require('express').Router()
const Users = require('../app/users')
const restricted = require('../app/http/middleware/restricted')

/**
 * CREATE - POST Endpoints
*/


/**
 * READ - GET Endpoints
*/
router.get('/:id', restricted, (req, res) => {
  const { id } = req.params
  
  Users.findById(id)
  .then((user) => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({error: `Could not find the user with given id: ${id}`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

router.get('/followers/:id', restricted, (req, res) => {
  const { id } = req.params
  
  Users.findFollowersById(id)
  .then((friends) => {
    if(friends) {
      res.status(200).json(friends)
    } else {
      res.status(404).json({error: `Could not find any friends for user with id: ${id}`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

router.get('/following/:id', restricted, (req, res) => {
  const { id } = req.params
  
  Users.findFollowingById(id)
  .then((friends) => {
    if(friends) {
      res.status(200).json(friends)
    } else {
      res.status(404).json({error: `Could not find any friends for user with id: ${id}`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

/**
 * UPDATE - PUT Endpoints
*/
router.put('/update/:id', restricted, (req, res) => {
  const { id } = req.params
  const newData = req.body

  Users.update(id, newData)
  .then(updated => {res.status(200).json({error: `User with ID: ${id} has been updated`})})
  .catch(err => {res.status(500).json({error: `There was an error updating the user with ID: ${id}`})})
})

/**
 * DELETE - DELETE Endpoints
*/
router.delete('/delete/:id', restricted, (req, res) => {
  const { id } = req.params

  Users.remove(id)
  .then(deleted => {res.status(204).end()})
  .catch(err => {res.status(500).json({error: `There was an error deleting the user with ID: ${id}`})})
})

module.exports = router