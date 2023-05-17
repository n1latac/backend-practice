'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superhero.belongsToMany(models.Superpower,{
        through: 'superheroes_to_superpowers',
        foreignKey: 'superhero_id'
      }),
      Superhero.hasMany(models.Image,{
        foreignKey: 'superhero_id'
      })
    }
  }
  Superhero.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    realName: {
      type: DataTypes.STRING,
      field: 'real_name',
      allowNull: false
    },
    originDescription: {
      field: 'origin_description',
      type: DataTypes.STRING
    },
    catchPhrase:{
      field: 'catch_phrase',
      type: DataTypes.STRING,
      unique: true
    },
    imagePath:{
      field: 'image_path',
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName: 'superheroes',
    underscored: true
  });
  return Superhero;
};