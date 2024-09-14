const InstructorsModel = require('../models/instructors.model');
exports.getInstructors = async (req,res) => {
    try {
        let instructors = await InstructorsModel.findAll();
        res.send(instructors)
    } catch (error) {
        console.log(error);
    }
}   