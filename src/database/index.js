const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Account = require('../models/Account')
const Transaction = require('../models/Transaction')

const connection = new Sequelize(dbConfig)

Account.init(connection)
Transaction.init(connection)

Account.associate(connection.models)
Transaction.associate(connection.models)

module.exports = connection
