'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Show.belongsTo(models.Movie,{
        foreignKey: 'movieId'
      })

      Show.belongsTo(models.Auditorium,{
        foreignKey: 'audiId'
      })
    }
  }
  Show.init({
    startTime: {
      type:DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    movieId : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    audiId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};