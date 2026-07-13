'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShowSeats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      showSeatStatus: {
        type: Sequelize.ENUM(
          'AVAILABLE',
          'BOOKED',
          'BLOCKED',
          'LOCKED'
        ),
        allowNull: false
      },
      showId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Shows',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      seatId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'Seats',
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      ticketId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tickets',
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
    await queryInterface.dropTable('ShowSeats');
  }
};