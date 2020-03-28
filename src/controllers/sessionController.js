const Account = require('../models/Account')

class SessionController {
  async store(req, res) {

    console.log('caindo na session')
    const { email, password } = req.body


    const account = await Account.findOne({ where: { email } })

    console.log('!!!!', account)

    if (!account) {
      return res.status(401).json({ message: 'Account not found' })
    }

    if (!(await account.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    return res.json({
      account,
      token: account.generateToken()
    })
  }
}

module.exports = new SessionController()
