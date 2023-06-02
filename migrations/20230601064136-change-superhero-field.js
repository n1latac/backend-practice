'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('superheroes','image_path',{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('superheroes','imagePath',{
      type: Sequelize.TEXT,
      field: 'image_path'
    })
  }
};
