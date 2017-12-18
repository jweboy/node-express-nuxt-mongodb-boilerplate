const https = require('https') // https模块
const _url = require('url') // url模块

const _cb = async (res) => {
  const buffer = []
  let result = null
  res.on('data', (data) => { // sync read and push
    buffer.push(data)
  })
  await res.on('end', () => { // async end to assignment
    result = Buffer.concat(buffer).toString('utf-8')
  })
  return result
}

exports.request = (method = 'GET', url, data) => {
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      return https
        .get(url, (res) => resolve(_cb(res)))
        .on('error', (err) => reject(err))
        .end()
    }
    // if (method === 'POST') {
    //   url = _url.parse(url)
    //   const option = {
    //     // 主机地址
    //     hostname: _url.hostname,
    //     // 目标地址
    //     path: url.path,
    //     method: 'POST',
    //     port: 443,
    //     // 头部协议
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Content-Length': data.length
    //     }
    //   }
    //   console.log(data)
    //   const req = https
    //     .request(option, (res) => {
    //       console.log('res', res)
    //       return resolve(_cb(res))
    //     })
    //     .on('error', (err) => {
    //       return reject(err.Error)
    //     })
    //   req.write(data)
    //   req.end()
    // }
  })
}
