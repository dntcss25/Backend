// models/StudentsInfo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const StudentsInfo = sequelize.define('StudentsInfo', {
  _id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Students',
      key: 'id',
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = StudentsInfo;
