const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

// Get user pantry
usersRouter.get('/pantry', (request, response, next) => {

  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  User.findById(decodedToken.id)
    .then(user => {
      response.json(user.pantry)
    })
    .catch(error => next(error))
})

// Add a new user
usersRouter.post('/', (request, response, next) => {
  const { username, password, pantry } = request.body

  const saltRounds = 10
  bcrypt.hash(password, saltRounds)
    .then(passwordHash => {
      const user = new User({
        username: username,
        passwordHash: passwordHash,
        pantry: pantry
      })

      user.save()
        .then(savedUser => {
          response.json(savedUser)
        })
        .catch(error => next(error))

    })
    .catch(error => next(error))
})

// Update user pantry
usersRouter.put('/pantry', (request, response, next) => {
  const pantry = request.body
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  User.findById(decodedToken.id)
    .then(user => {
      user.pantry = pantry
      user.save()
        .then(
          response.json(user.pantry)
        )
        .catch(error => next(error))
    })
    .catch(error => next(error))
})

module.exports = usersRouter