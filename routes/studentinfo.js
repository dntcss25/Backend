const express = require('express');
const router = express.Router();
const {getStudentinfo} = require ('../controllers/studentinfo.controller.js')

router.get('/', getStudentinfo);

module.exports = router;