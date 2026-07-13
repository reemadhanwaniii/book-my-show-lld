'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Auditoria', [
      {
        name: 'Screen 1',
        capcity: 200,
        theatreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Screen 2',
        capcity: 150,
        theatreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Screen 1',
        capcity: 180,
        theatreId: 2,
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
