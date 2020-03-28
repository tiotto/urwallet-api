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
    const { email, password } = req.body

    if (!email && !password) {
      return res.status(401).json({ message: 'Unable to proceed without password or email'})
    }

    const account = await Account.create({ email, password })

    return res.json(account)
  }
}
