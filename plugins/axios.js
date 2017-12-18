const axios = require('axios')

let options = {}

if (process.erver) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 5000}/api`
}

axios.create(options)

exports.axios = axios
