const express = require('express');
const router = express.Router();
const InstructorsController = require('../controllers/instructors.controller.js');

router.get('/', InstructorsController.getAllInstructors);
router.post('/', InstructorsController.createInstructors);

router.get('/:id', InstructorsController.getInstructorsById);
router.put('/:id', InstructorsController.updateInstructors);
router.delete('/:id', InstructorsController.deleteInstructors);
module.exports = router;