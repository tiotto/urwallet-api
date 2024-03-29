const express = require('express')
const routes = express.Router()

const authMiddleware = require('./middleware/auth')

const AccountController = require('./controllers/accountController')
const TransactionController = require('./controllers/transactionController')
const SessionController = require('./controllers/sessionController')

routes.post('/sessions', SessionController.store)

routes.get('/accounts', AccountController.index)
routes.post('/accounts', AccountController.store)

routes.get('/accounts/:account_id', AccountController.indexId)

routes.use(authMiddleware)

routes.get('/accounts/:account_id/transactions', TransactionController.index)
routes.post('/accounts/:account_id/transactions', TransactionController.store)

module.exports = routes
