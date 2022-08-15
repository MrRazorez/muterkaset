'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlists');
  }
};