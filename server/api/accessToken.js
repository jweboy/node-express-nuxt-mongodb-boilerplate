const { Router } = require('express')
const route = Router()

exports.accessToken = (wechat) => {
  return route.get('/', (req, res, next) => {
    wechat
      .getAccessToken()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
