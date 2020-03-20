const Account = require('../models/Account')

module.exports = {
  async index (req, res) {
    const accounts = await Account.findAll()

    return res.json(accounts)
  },
  async store (req, res) {
    const email = req.body

    const account = await Account.create(email)

    return res.json(account)
  }
}
