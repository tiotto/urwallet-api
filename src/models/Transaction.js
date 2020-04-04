const { Model, DataTypes } = require('sequelize')

class Transaction extends Model {
  static init (sequelize) {
    super.init({
      blockchain: DataTypes.STRING,
      type: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      value: DataTypes.DECIMAL,
      timestamp: DataTypes.DATE
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' })
  }
}

module.exports = Transaction
