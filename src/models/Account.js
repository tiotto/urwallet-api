const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

class Account extends Model {
  static init (sequelize) {
    super.init({
      email: DataTypes.STRING,
      bitcoin: DataTypes.DECIMAL,
      brita: DataTypes.DECIMAL,
      total: DataTypes.DECIMAL,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async account => {
          if (account.password) {
            account.password_hash = await bcrypt.hash(account.password, 8)
          }
        }
      },
      sequelize
    })
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  generateToken() {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  }

  static associate (models) {
    this.hasMany(models.Transaction, { foreignKey: 'account_id', as: 'transactions' })
  }
}

module.exports = Account
