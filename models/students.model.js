// models/Student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Student = sequelize.define('Students', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;
