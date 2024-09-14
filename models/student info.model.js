const DataType = require('sequelize');
const sequelize = require('../utils/database');
//module.exports = (DataTypes , sequelize) => {
    const StudentInfo = sequelize.define('student info', {
        _id: {
          type: DataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        studentId: {
          type: DataType.INTEGER,
          allowNull: true
        },
        yearLevel: {
          type: DataType.INTEGER,
          allowNull: true
        },
        course: {
          type: DataType.STRING,
          allowNull: true,
        },
        section: {
          type: DataType.STRING,
          allowNull: true
        },
        instructorId: {
          type: DataType.INTEGER,
          allowNull: true,
        },
        createdAt: {
          type: DataType.DATE,
          allowNull: true
        },
        updatedAt: {
          type: DataType.DATE,
          allowNull: true,
        },
    })
module.exports = StudentInfo;