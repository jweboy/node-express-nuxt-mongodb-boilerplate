const { Nuxt, Builder } = require('nuxt')
const Koa = require('koa')
// const express = require('express')
const Router = require('koa-router')
const http = require('http')
const dpd = require('deployd')
const api = require('./api')

async function startApp() {
  const app = new Koa()
  // const _app = new express()
  const router = new Router()
  const port = process.env.PORT || 3000
  const host = process.env.HOST || '127.0.0.1'
  // const server = http.createServer(app)

  // Import and set Nuxt.js options
  const config = require('../nuxt.config')
  config.dev = !(app.env === 'production')

  // Instanceiate Nuxt.js
  const nuxt = new Nuxt(config)

  // Start build process in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Set nuxt render
  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset.

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise
          .then(resolve)
          .catch(reject)
      })
    })
  })
  app.use(async (ctx) => {
    let url = ctx.url
    
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
  
    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    
    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring
    }
    console.log(ctx.body)
  })
  //* set api 
  // app.use('/api', api)

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
  app.listen(port, host)
  console.log(`Server listening on port ${host}:${port}!`)
}

startApp()
