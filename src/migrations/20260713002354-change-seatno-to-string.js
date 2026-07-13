'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Seats', 'seatNo', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Seats', 'seatNo', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};
