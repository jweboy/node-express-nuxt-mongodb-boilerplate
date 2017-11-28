const { Users } = require('../lib/mongo')

const pageSize = 10

module.exports = {
  // getAllUsers: () => Users
  // 	.find()
  // 	.exec(),
  getPageUsers: (n) => Users
    .find()
    .skip(pageSize * (n - 1))//* skip在数据量大的时候会有性能问题
    .limit(pageSize)
    .exec()
}
