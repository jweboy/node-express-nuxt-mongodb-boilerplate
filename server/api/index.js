const { Router } = require('express')
const goods = require('./goods')
const users = require('./users')

//* Create express router
const router = Router()

//* Add Routes
router.use('/goods', goods)
router.use('/users', users)

module.exports = router
