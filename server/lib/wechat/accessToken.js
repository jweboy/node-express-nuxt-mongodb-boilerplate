const fs = require('fs')
const { format } = require('util')
const accessToken = require('./access_token')
const { request } = require('../../util/request')

exports.getAccessToken = ({
  apiURL: { accessTokenApi },
  appDomain,
  appID,
  appSecret
}) => {
  return new Promise((resolve, reject) => {
    // 当前时间
    const currentTime = new Date().getTime()
    // 格式化url
    const url = format(
      accessTokenApi,
      appDomain,
      appID,
      appSecret
    )
    // 不存在access_token
    if (accessToken.expires_time < currentTime) {
      return request('GET', url)
        .then((data) => {
          const result = JSON.parse(data)
          if (data.indexOf('errcode') < 0) { // success
            accessToken.access_token = result.access_token
            accessToken.expires_time = new Date().getTime() + (parseInt(result.expires_in) - 200) * 1000

            // update local json
            // fs.writeFileSync('./wechat/access_token.json', JSON.stringify(accessToken))
            // send access_token
            return resolve(accessToken)
          }
          return resolve(result) // error
        })
    }
    // 已经存在access_token
    return resolve(accessToken)
  })
}
