'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShowSeat.belongsTo(models.Show,{
        foreignKey: 'showId'
      })

      ShowSeat.belongsTo(models.Seat,{
        foreignKey: 'seatId'
      })

      ShowSeat.belongsTo(models.Ticket,{
        foreignKey: 'ticketId'
      })
    }
  }
  ShowSeat.init({
    showSeatStatus: {
      type: DataTypes.ENUM(
        'AVAILABLE',
        'BOOKED',
        'BLOCKED',
        'LOCKED'
      ),
      allowNull: false
    },
    showId : {
      type: DataTypes.Integer,
      allowNull: false
    },
    seatId : {
      type: DataTypes.Integer,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShowSeat',
  });
  return ShowSeat;
};