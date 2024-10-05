const express = require('express');
const router = express.Router();
const {getInstructors, createInstructors} = require('../controllers/instructors.controller.js');

router.get('/', getInstructors);
// router.post('/', createInstructors);
module.exports = router;