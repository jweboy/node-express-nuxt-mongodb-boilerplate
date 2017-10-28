const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'
const config = require('../nuxt.config')
const http = require('http')
const io = require('socket.io')
const dpd = require('deployd')
const api = require('./api')
const app = express()
const server = http.createServer(app)

const nuxt = new Nuxt(config)

//* We instantiate Nuxt.js with the options
config.dev = !isProd

//* Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

//* set api 
app.use('/api', api)

//* set nuxt render
app.use(nuxt.render)

// io.listen(server, {
//   'log level': 0
// })
// dpd.attach(server, {
//   socketIo: io, // if not provided, attach will create one for you.
//   env: process.env.NODE_ENV,
//   db: {
//     host: 'localhost',
//     port: 27017,
//     name: 'test-app'
//   }
// })
// After attach, express can use server.handleRequest as middleware
// app.use(server.handleRequest)

// start server
// server.listen(port)
// server.on('listening', function () {
//   console.log(`App listening on port ${port}!`)
// })
// server.on('error', function (err) {
//   console.error(err)
//   process.nextTick(function () { // Give the server a chance to return an error
//     process.exit()
//   })
// })

//* Listen the server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
