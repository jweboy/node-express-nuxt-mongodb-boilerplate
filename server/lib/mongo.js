const { mongodb: { url } } = require('../config')

const mongoose = require('mongoose')
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

exports.Goods = mongoose.model('Goods', {
  name: { type: String },
  price: { type: Number },
  tax: { type: Number }
}, 'Mall')

exports.Users = mongoose.model('Users', {
  username: { type: String },
  email: { type: String },
  dateCrawled: { type: String }
})
