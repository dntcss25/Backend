const express = require('express');
const router = express.Router();
const StudentinfoController = require('../controllers/studentsinfo.controller.js');


router.get('/', StudentinfoController.getAllStudentinfo);
router.get('/:id', StudentinfoController.getStudentinfoById);
router.post('/', StudentinfoController.createStudentinfo);
router.put('/:id', StudentinfoController.updateStudentinfo);
router.delete('/:id', StudentinfoController.deleteStudentinfo);
module.exports = router;