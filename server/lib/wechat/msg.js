exports.textMsg = (toUser, fromUser, content) => {
  return `<xml>
  <ToUserName><![CDATA[${toUser}]]></ToUserName>
  <FromUserName><![CDATA[${fromUser}]]></FromUserName>
  <CreateTime>${new Date().getTime(1)}</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[${content}]]></Content>
  <MsgId>1234567890123456</MsgId>
  </xml>`
}
