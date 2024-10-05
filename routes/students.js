const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/students.controller.js');

router.get('/', StudentController.getAllStudents);
router.post('/', StudentController.createStudent);

router.get('/:id', StudentController.getStudentById);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);
module.exports = router;