const bcryptjs = require('bcryptjs')
const router = require('express').Router()
const Users = require('../app/users')
const { isValid } = require('../resources/js/users-service')
const { generateToken } = require('../app/http/controllers/Auth')


router.post('/register', (req, res) => {
  const credentials = req.body

  if (isValid(credentials)) {
    const rounds = 8
    const hash = bcryptjs.hashSync(credentials.password, rounds)

    credentials.password = hash

    Users.add(credentials)
    .then(user => {
      res.status(201).json({ message: user })
    })
    .catch(error => { res.status(500).json({ error: error.message })
    })
  } else {
    res.status(400).json({ error: 'Please provide both username AND password. The password should be alphanumeric.' })
  }
})

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (isValid(req.body)) {
    Users.findBy({ username: username })
    .then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user)
        Users.updateUser({token: token}, user.id)
        res.status(200).json({ 
          message: `Login successful.`,
          token: token 
        })
        } else {
          res.status(401).json({ error: 'Invalid credentials.' })
        }
      })
      .catch(error => { res.status(500).json({ error: error.message }) 
      })
  } else {
    res.status(400).json({ error: 'Please provide both username AND password. The password should be alphanumeric.' })
  }
})


module.exports = router