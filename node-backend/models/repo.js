'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    id: {type: DataTypes.INTEGER,primaryKey: true},
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    language: DataTypes.STRING,
  }, {timestamps: false});
  Repo.associate = function(models) {
    // associations can be defined here
  };
  return Repo;
};