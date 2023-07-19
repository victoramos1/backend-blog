'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date()
    await queryInterface.bulkInsert('Usuarios', [
      {
        usuario: "admin",
        senha: "admin",
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
