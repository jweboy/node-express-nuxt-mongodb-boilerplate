const crypto = require('crypto') // 加密模块

exports.auth = (req, res, token) => {
  /**
   * @param signature 加密签名
   * @param timestamp 时间戳
   * @param nonce 随机数
   * @param echostr 随机字符串
   */
  const { query: { signature, timestamp, nonce, echostr } } = req

  // 字典序排序
  const ary = [token, timestamp, nonce]
  ary.sort()

  // sha1加密
  const hashCode = crypto.createHash('sha1') // 创建加密类型
  const tempStr = ary.join('')
  const resultCode = hashCode.update(tempStr, 'utf8').digest('hex') // 加密字符串

  // 比对 signature, 标识该请求来源于微信
  if (resultCode === signature) {
    return res.send(echostr)
  }
  res.send('mismatch')
}
