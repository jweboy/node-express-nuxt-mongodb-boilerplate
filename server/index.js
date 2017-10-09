import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import config from '../nuxt.config'
import chalk from 'chalk'

const { env: { HOST = '127.0.0.1', PORT = '3000' } } = process
const app = express()
const nuxt = new Nuxt(config)
const _isDev = (process.env.NODE_ENV = 'development')

app.set('port', PORT)

//* Build only in dev mode
if (_isDev) {
  const builder = new Builder(nuxt)
  builder.build()
}

//* Give nuxt middleware to express
app.use(nuxt.render)

//* Listen the server
app.listen(PORT, function () {
  chalk.bgCyan(`Server listening on port ${HOST}:${PORT}!`)
})
