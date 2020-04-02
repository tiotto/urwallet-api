const express = require('express')
const cors = require('cors')
const routes = require('./routes')

require('./database')

const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
  next()
})

app.options('*', cors())

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3001)
