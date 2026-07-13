'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Movies', [
      {
        name: 'Inception',
        poster: 'inception.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Interstellar',
        poster: 'interstellar.jpg',
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
