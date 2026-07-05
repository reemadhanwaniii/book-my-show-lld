'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Auditorium,{
        foreignKey: 'audiId'
      })
    }
  }
  Seat.init({
    seatNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    row:{
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    col: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seatType: {
      type: DataTypes.ENUM(
        'SILVER',
        'GOLD',
        'PLATINUM',
        'RECLINER'
      ),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};