'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seatNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      seatType: {
        type: Sequelize.ENUM(
          'SILVER',
          'GOLD',
          'PLATINUM',
          'RECLINER'
        ),
        allowNull: false
      },
      audiId : {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Auditorium',
            key: 'id'
        },

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};