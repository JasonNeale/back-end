const router = require('express').Router()
const Users = require('../app/Users')
const restricted = require('../app/http/middleware/restricted')
const { isValidPass } = require('../resources/js/users-service')
const bcryptjs = require('bcryptjs')

/**
 * CREATE - POST Endpoints
*/
router.post('/friends', restricted, (req, res) => {
  const friendship = req.body
  
  Users.addFriendship(friendship)
  .then((friends) => {
    if(friends) {
      res.status(201).json(user)
    } else {
      res.status(404).json({error: `Could not find the friendship with given id: ${id}`})
    }
  })
  .catch(err => {res.status(500).json({error: err})})
})

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
      if(friends.length > 0) {
        res.status(200).json(friends)
      } else {
        res.status(200).json({message: 'This user has no followers'})
      }
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
      if(friends.length > 0) {
        res.status(200).json(friends)
      } else {
        res.status(200).json({message: 'This user is not following anyone.'})
      }
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

  if(newData.password) {
    if(isValidPass(newData.password)) {
      const rounds = 8
      const hash = bcryptjs.hashSync(newData.password, rounds)

      newData.password = hash
    }
  }

  Users.update(id, newData)
  .then(updated => {res.status(201).json({message: `User with ID: ${id} has been updated`})})
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