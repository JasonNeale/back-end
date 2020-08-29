const bcryptjs = require('bcryptjs')
const router = require('express').Router()
const Users = require('../app/Users')
const { isValid } = require('../resources/js/users-service')
const { generateToken } = require('../app/http/controllers/AuthController')


router.post('/register', (req, res) => {
  const credentials = req.body

  if (isValid(credentials)) {
    const rounds = 8
    const hash = bcryptjs.hashSync(credentials.password, rounds)

    credentials.password = hash

    Users.add(credentials)
    .then(user => {
      const token = generateToken(user)
      res.status(201).json({message: `Registration successful`, user: user, token: token})
    })
    .catch(error => {res.status(500).json({error: error.message})
    })
  } else {
    res.status(400).json({error: `Please provide both username AND password. The password should be alphanumeric`})
  }
})

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (isValid(req.body)) {
    Users.findBy({username: username})
    .then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user)
        const dbToken = {token: token}
        res.status(200).json({message: `Login successful`, id: user.id, token: token})
      } else {
        res.status(401).json({error: `Invalid credentials`})
      }
    })
    .catch(error => {res.status(500).json({error: error.message}) 
    })
  } else {
    res.status(400).json({error: `Please provide both username AND password. The password should be alphanumeric`})
  }
})

router.post('/logout', (req, res) => {
  const { username, password } = req.body

  if (isValid(req.body)) {
    Users.findBy({username: username})
    .then(([user]) => {
      if(user.token = null) {res.status(404).json({error: `This user is not logged in`})}
      if (user && bcryptjs.compareSync(password, user.password)) {
        const dbToken = {token: null}
        Users.update(user.id, dbToken)
        .then(auth => {
          res.status(200).json({message: `Logout successful`})
        })
        .catch(err => {res.status(500).json({error: `There was an internal server error`})})
        } else {
          res.status(401).json({error: `Invalid credentials`})
        }
      })
      .catch(error => {res.status(500).json({error: error.message}) 
      })
  } else {
    res.status(400).json({error: `Please provide both username AND password. The password should be alphanumeric`})
  }
})


module.exports = router