const express = require('express')

const routes = require('./routes')

require('./database')

const app = express()

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3000)
