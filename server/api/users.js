const { Router } = require('express')
const { getPageUsers } = require('../models/users')
const route = Router()

route.get('/', (req, res, next) => {
  const { query: { pageNumber } } = req
  getPageUsers(pageNumber)
    .then(data => {
      res.send(data)
    })
    .catch(next)
})

module.exports = route
