const { Goods } = require('../lib/mongo')

module.exports = {
  getAllGoods: () => Goods.find().exec()
}
