// models/Instructors.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Instructors = sequelize.define('Instructors', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Instructors;
