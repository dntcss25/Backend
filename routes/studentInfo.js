const express = require('express');
const router = express.Router();
const {getStudentInfo} = require('../controllers/studentinfo.controller.js');
router.get('/', getStudentInfo);
module.exports = router;