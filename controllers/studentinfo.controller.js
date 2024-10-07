const StudentinfoModel = require('../models/studentinfo.model');

exports.getStudentinfo = async (req, res) => {
    try {
        console.log("studentinfo");
        let studentinfo = await StudentinfoModel.findAll();
        res.send(studentinfo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};