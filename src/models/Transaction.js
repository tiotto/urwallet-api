const { Model, DataTypes } = require('sequelize')

class Transaction extends Model {
  static init (sequelize) {
    super.init({
      blockchain: DataTypes.STRING,
      type: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
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
