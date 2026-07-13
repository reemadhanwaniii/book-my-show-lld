'use strict';
const now = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Cities',[{
    name: 'Delhi',
    createdAt: now,
    updatedAt: now
   },{
    name: 'Mumbai',
    createdAt: now,
    updatedAt: now
   },{
    name :'Banglore',
    createdAt: now,
    updatedAt: now
   },{
    name: 'Bhopal',
    createdAt: now,
    updatedAt: now
   },{
    name: 'Raipur',
    createdAt: now,
    updatedAt: now
   },{
    name: 'Pune',
    createdAt: now,
    updatedAt: now
   },
   {
    name: 'C1',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: 'C2',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ])
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
