const DataType = require('sequelize');
const sequelize = require('../utils/database');
    const Instructor = sequelize.define('instructors', {
        _id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataType.STRING,
            allowNull: true
        },
        lastName: {
            type: DataType.STRING,
            allowNull: true
        },
        subject: {
            type: DataType.STRING,
            allowNull: true,
        },
        degree: {
            type: DataType.STRING,
            allowNull: true,
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
        },
        contact: {
            type: DataType.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'instructors'
    });
module.exports = Instructor;
