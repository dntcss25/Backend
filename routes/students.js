const express = require('express');
const router = express.Router();
const {getStudents} = require('../controllers/students.controller.js');
router.get('/', getStudents);
module.exports = router;