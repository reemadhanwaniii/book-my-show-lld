'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ShowSeats', [
      {
        showId: 1,
        seatId: 1,
        showSeatStatus: 'AVAILABLE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        showId: 1,
        seatId: 2,
        showSeatStatus: 'BOOKED',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        showId: 2,
        seatId: 3,
        showSeatStatus: 'AVAILABLE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        showId: 2,
        seatId: 4,
        showSeatStatus: 'BLOCKED',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
