const express = require('express');
const router = express.Router();
const StudentInfoController = require('../controllers/student_info.controller.js');

router.get('/', StudentInfoController.getAllStudentInfo);
router.post('/', StudentInfoController.createStudentInfo);

router.get('/:id', StudentInfoController.getStudentInfoById);
router.put('/:id', StudentInfoController.updateStudentInfo);
router.delete('/:id', StudentInfoController.deleteStudentInfo);

module.exports = router;
