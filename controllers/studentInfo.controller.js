const StudentInfoModel = require('../models/studentInfo.model');
exports.getStudentInfo = async (req,res) => {
    try {
        let studentinfo = await StudentInfoModel.findAll();
        res.send(studentinfo)
    } catch (error) {
        console.log(error);
    }
}