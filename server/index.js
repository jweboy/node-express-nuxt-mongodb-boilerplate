const { Nuxt, Builder } = require('nuxt')
const express = require('express')
// const http = require('http')
// const dpd = require('deployd')
const api = require('./api')
// const server = http.createServer(app)

async function startApp() {
  // initial basic variable
  const app = express()
  const port = process.env.PORT || 3000
  const host = process.env.HOST || '127.0.0.1'
  const isProd = process.env.NODE_ENV === 'production'

  // Import and set Nuxt.js options
  const config = require('../nuxt.config')
  config.dev = !isProd

  // Instanceiate Nuxt.js
  const nuxt = new Nuxt(config)

  // Start build process in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Set request api 
  app.use('/api', api)

  // Set nuxt render
  app.use(nuxt.render)
  // app.use(async (req, res, next) => {
  //   await next()
  //   // res.writeHead(200)

  //   return new Promise((resolve, reject) => {
  //     res.on('close', resolve)
  //     res.on('finish', resolve)
  //     nuxt.render(req, res, promise => {
  //       // nuxt.render passes a rejected promise into callback on error.
  //       promise
  //         .then(resolve)
  //         .catch(reject)
  //     })
  //   })
  // })

  // io.listen(server, {
  //   'log level': 0
  // })
  // dpd.attach(server, {
  //   socketIo: io, // if not provided, attach will create one for you.
  //   env: process.env.NODE_ENV,
  //   db: {
  //   host: 'localhost',
  //   port: 27017,
  //   name: 'test-app'
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
  //   process.exit()
  //   })
  // })

  //* Listen the server
  app.listen(port, () => {
    console.log(`Server listening on port ${host}:${port}!`)
  })
}

startApp()
