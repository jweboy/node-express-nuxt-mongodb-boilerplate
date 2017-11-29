const { Router } = require('express')
const route = Router()

route.get('/', (req, res, next) => {
  res.send({
    access_token: 'jkjaksjdkas'
  })
})

module.exports = route
