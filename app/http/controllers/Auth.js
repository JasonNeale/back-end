const jwt = require('jsonwebtoken')
const secrets = require('../../../config/secrets')


function generateToken(user) {
  const payload = {
    username: user.username
  }

  const options = {
    expiresIn: '2h'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = {
  generateToken
}