'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User,{
        foreignKey: 'userId'
      })

      Ticket.belongsTo(models.Show,{
        foreignKey: 'showId'
      })

      Ticket.hasMany(models.ShowSeat,{
        foreignKey: 'ticketId'
      })
    }
  }
  Ticket.init({
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      tyep: DataTypes.ENUM(
        'BOOKED',
        'CANCELLED',
        'PENDING'
      ),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};