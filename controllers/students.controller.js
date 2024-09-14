const StudentsModel = require('../models/Students.model');
exports.getStudents = async (req,res) => {
    try {
        let students = await StudentsModel.findAll();
        res.send(students)
    } catch (error) {
        console.log(error);
    }
}