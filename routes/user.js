const bcryptjs = require('bcryptjs')
const router = require('express').Router()
const Users = require('../app/users')
const restricted = require('../app/http/middleware/restricted')


router.get('/:id', restricted, (req, res) => {
  const { id } = req.params
  
  Users.findById(id)
  .then((user) => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: `Could not find the user with given id: ${id}.` })
    }
  })
  .catch(err => {res.status(500).json({ error: err })})
})


module.exports = router