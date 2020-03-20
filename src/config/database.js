const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.DB_HOST, process.env.DB_USERNAME)

module.exports = {
  dialect: 'mysql',
  database: 'urwallet',
  host: 'urwalletdb.czhtjzcprold.us-east-1.rds.amazonaws.com',
  username: 'admin',
  password: 'thaysthays',
  define: {
    underscored: true,
    timestamps: false
  }
}
