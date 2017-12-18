const { Router } = require('express')
const { getAllGoods } = require('../models/goods')
const route = Router()

route.get('/', (req, res, next) => {
  getAllGoods()
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch(next)
})

module.exports = route
