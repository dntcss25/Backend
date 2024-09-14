const db = require('../db');

// Get all students
exports.getAllStudents = async () => {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
};

// Create a new student
exports.createStudent = async (student) => {
  const { _id, studentNo, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social } = student;
  const result = await db.query(
    'INSERT INTO students (_id, studentNo, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [_id, studentNo, firstName, lastName, email, birthday, gender, address, citizenship, avatar, contact, civilStatus, social]
  );
  return result[0];
};

// Get student by ID
exports.getStudentById = async (id) => {
  const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
  return rows[0];
};

// Delete student by ID
exports.deleteStudentById = async (id) => {
  const result = await db.query('DELETE FROM students WHERE id = ?', [id]);
  return result[0];
};
const DataType = require('sequelize');
const sequelize = require('../utils/database');
//module.exports = (DataTypes , sequelize) => {
    const Students = sequelize.define('students', {
        _id: {
          type: DataType.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        studentNo: {
          type: DataType.INTEGER,
          allowNull: true
        },
        firstName: {
          type: DataType.STRING,
          allowNull: true
        },
        lastName: {
          type: DataType.STRING,
          allowNull: true,
        },
        email: {
          type: DataType.STRING,
          allowNull: true
        },
        birthday: {
          type: DataType.DATE,
          allowNull: true,
        },
        gender: {
          type: DataType.STRING,
          allowNull: true
        },
        address: {
          type: DataType.JSON,
          allowNull: true,
        },
        citizenship: {
          type: DataType.STRING,
          allowNull: true
        },
        avatar: {
          type: DataType.JSON,
          allowNull: true,
        },
        contact: {
          type: DataType.INTEGER,
          allowNull: true
        },
        civilStatus: {
          type: DataType.STRING,
          allowNull: true,
        },
        social: {
          type: DataType.STRING,
          allowNull: true
        },
        createdAt: {
          type: DataType.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataType.DATE,
          allowNull: true,
        },
    })
module.exports = Students;