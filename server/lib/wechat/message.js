const { parseString } = require('xml2js')
const msg = require('./msg')

exports.handleMsg = (req, res) => {
  // req.on('data', (data) => {
  //   console.log('data', data)
  //   buffer.push(data)
  // })
  // req.on('end', () => {
  // const xmlMsg = Buffer.concat(buffer).toString('utf-8')
  // console.log('buffer', buffer)
  // console.log('xmlMsg', xmlMsg)

  // parseString(req.body, (err, res) => {
  //   console.log('err', err)
  //   console.log('res', res)
  //   if (!err && res) {
  const result = req.body.xml
  const toUser = result.tousername  // 接收方微信
  const fromUser = result.fromusername // 发送方微信

  switch (result.event) {
    case 'subscribe':
      return msg.textMsg(toUser, fromUser, '欢迎关注jweboy公众号，一起斗图吧')
    case 'unsubscribe':
      return msg.textMsg(toUser, fromUser, '👋')
  }
  switch (result.msgtype) {
    case 'text':
      return msg.textMsg(toUser, fromUser, '😄,又见到你这个傻逼了')
  }
  //     return false
  //   }
  // })
  // })
}
