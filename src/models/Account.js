const { Model, DataTypes } = require('sequelize')

class Account extends Model {
  static init (sequelize) {
    super.init({
      email: DataTypes.STRING,
      bitcoin: DataTypes.INTEGER,
      britas: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      password_hash: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.Transaction, { foreignKey: 'account_id', as: 'transactions' })
  }
}

module.exports = Account
