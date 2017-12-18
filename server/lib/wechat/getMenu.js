const { format } = require('util')
const { request } = require('../../util/request')
const accessToken = require('./access_token')

exports.getMenu = ({
  apiURL: { getMenu },
  appDomain
}) => {
  return new Promise((resolve, reject) => {
    // 格式化url
    const url = format(
      getMenu,
      appDomain,
      accessToken.access_token
    )
    return request('GET', url)
      .then((data) => resolve(JSON.parse(data)))
      .catch(err => reject(err))
  })
}
