'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('superheroes_to_superpowers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superheroId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'superhero_id',
        references:{
          model:{
            tableName: 'superheroes',
            key: 'id'
          }
        }
      },
      superpowerId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'superpower_id',
        references:{
          model:{
            tableName: 'superpowers',
            key: 'id'
          }
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('superheroes_to_superpowers')
  }
};
