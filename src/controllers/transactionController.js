const Account = require('../models/Account')
const Transaction = require('../models/Transaction')

module.exports = {
  async index (req, res) {
    const { account_id } = req.params

    const account = await Account.findByPk(account_id, {
      include: { association: 'transactions' }
    })

    return res.json(account)
  },
  async store (req, res) {
    const { account_id } = req.params
    const { blockchain, type, amount } = req.body

    const account = await Account.findByPk(account_id)

    if (!account) {
      return res.status(400).json({ error: 'Account not found!' })
    }

    const transaction = await Transaction.create({
      blockchain,
      type,
      amount,
      account_id
    })

    return res.json(transaction)
  }
}
