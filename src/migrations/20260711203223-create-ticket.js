'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM(
          'BOOKED',
          'CANCELLED',
          'PENDING'
        ),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'Users',
          key: 'id'
        },

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      showId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'Shows',
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
    await queryInterface.dropTable('Tickets');
  }
};