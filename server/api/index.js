const express = require('express')
const goods = require('./goods')

// Create express router
const router = express.Router()
const { request, response } = express()
// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, request)
  Object.setPrototypeOf(res, response)
  req.res = res
  res.req = req
  next()
})

router.use('/goods', goods)

module.exports = {
  path: '/api',
  handler: router
}
