'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shows', [
      {
        movieId: 1,
        audiId: 1,
        startTime: new Date('2025-03-15T14:00:00'),
        endTime: new Date('2025-03-15T16:30:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        audiId: 2,
        startTime: new Date('2025-03-15T18:00:00'),
        endTime: new Date('2025-03-15T21:00:00'),
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
