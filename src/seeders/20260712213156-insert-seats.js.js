'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        seatNo: 'A1',
        row: 1,
        col: 1,
        seatType: 'SILVER',
        audiId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNo: 'A2',
        row: 1,
        col: 2,
        seatType: 'SILVER',
        audiId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNo: 'B1',
        row: 2,
        col: 1,
        seatType: 'GOLD',
        audiId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNo: 'B2',
        row: 2,
        col: 2,
        seatType: 'GOLD',
        audiId: 2,
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
