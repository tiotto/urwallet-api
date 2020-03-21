const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  dialect: 'mysql',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  define: {
    underscored: true,
    timestamps: false
  }
}
