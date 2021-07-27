const express = require('express')
const fs = require('fs')
const useragent = require('express-useragent')
const get = require('lodash/get')
const compression = require('compression')

require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3002'

// NOTE: env log
console.log('---------------- server env -----------------')
console.log('NODE_ENV:', NODE_ENV)
console.log('HOST:', host)
console.log('PORT:', port)
console.log('---------------------------------------------')

const app = express()

app.set('host', host)

app.set('port', port)

app.use(compression())

app.use(useragent.express())

app.use('/', express.static('dist/front-cdn'))
app.use('/\*', express.static('dist/front-cdn'))

app.listen(app.get('port'), app.get('host'), function() {
  console.log(`server listening on ${host}:${port}!`)
})
