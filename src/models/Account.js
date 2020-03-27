const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

class Account extends Model {
  static init (sequelize) {
    super.init({
      email: DataTypes.STRING,
      bitcoin: DataTypes.INTEGER,
      brita: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
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

  static associate (models) {
    this.hasMany(models.Transaction, { foreignKey: 'account_id', as: 'transactions' })
  }
}

module.exports = Account
