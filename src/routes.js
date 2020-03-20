const express = require('express')

const AccountController = require('./controllers/accountController')
const TransactionController = require('./controllers/transactionController')

const routes = express.Router()

routes.get('/accounts', AccountController.index)
routes.post('/accounts', AccountController.store)

routes.get('/accounts/:account_id/transactions', TransactionController.index)
routes.post('/accounts/:account_id/transactions', TransactionController.store)

module.exports = routes
