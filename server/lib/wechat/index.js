const { auth } = require('./auth')
const { getAccessToken } = require('./accessToken')
const { handleMsg } = require('./message')
const { getMenu } = require('./getMenu')

/**
 * @param {Object} 配置参数
 */
function WeChat(config) {
  // common variable
  this.config = config
}

WeChat.prototype = {
  auth: function (req, res) {
    auth(req, res, this.config.token)
  },
  getAccessToken: function () {
    return getAccessToken(this.config)
  },
  getMenu: function () {
    return getMenu(this.config)
  },
  handleMsg: (req, res) => handleMsg(req, res)
}

module.exports = WeChat
