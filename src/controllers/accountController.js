const Account = require('../models/Account')

module.exports = {
  async index (req, res) {
    const accounts = await Account.findAll()

    return res.json(accounts)
  },
  async indexId (req, res) {
    const { account_id } = req.params

    const account = await Account.findByPk(account_id)

    return res.json(account)
  },
  async store (req, res) {
    const email = req.body

    const account = await Account.create(email)

    return res.json(account)
  }
}
