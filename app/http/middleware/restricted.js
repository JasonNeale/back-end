const jwt = require('jsonwebtoken')
const secrets = require('../../../config/secrets')

module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization
      console.log('Restricted Token: ', token)
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        
        if (err) {
          console.log('JWT Error: ', err)
          res.status(401).json({ message: `You are not authorized to view this. ERROR: ${err}` })
        } else {
          console.log('JWT decodedToken: ', decodedToken)
          req.decodedJwt = decodedToken
          console.log('JWT req.decodedJwt: ', req.decodedJwt)
          next()
        }
      })
  } catch (err) {
    res.status(401).json({ error: err.message })
  }

}