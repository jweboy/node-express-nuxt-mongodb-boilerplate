const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
  res.send({
    statusText: 'goods is ok'
  })
})

module.exports = route
