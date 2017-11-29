const { Router } = require('express')
const goods = require('./goods')
const users = require('./users')
const getAccessToken = require('./getAccessToken')

//* Create express router
const router = Router()

//* Add Routes
router.use('/goods', goods)
router.use('/users', users)
router.use('/getAccessToken', getAccessToken)

module.exports = router
