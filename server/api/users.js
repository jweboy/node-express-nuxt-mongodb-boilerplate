const { Router } = require('express')
const { getAllUsers } = require('../models/users')
const route = Router()

route.get('/', (req, res, next) => {
const { query: { pageNumber }} = req
  getAllUsers(pageNumber)
    .then(data => {
      res.send(data)
    })
    .catch(next)
})

module.exports = route
