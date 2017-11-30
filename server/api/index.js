const { Router } = require('express')
const { accessToken } = require('./accessToken')
const goods = require('./goods')
const users = require('./users')
const WeChat = require('../lib/wechat')
const wechatConfig = require('../config/wechat')

const wechat = new WeChat(wechatConfig)

//* Create express router
const router = Router()

//* Add Routes
router.use('/goods', goods)
router.use('/users', users)
router.use('/accessToken', accessToken(wechat))

module.exports = router
