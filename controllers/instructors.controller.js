const InstructorsModel = require('../models/instructors.model.js');

exports.getInstructor = async (req,res) => {
    try {
        console.log("instructors")
        let users = await InstructorsModel.findAll();
        console.log("instructors", users)
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

