const StudentInfo = require('../models/student_info.model.js');

exports.getAllStudentInfo = async (req, res) => {
    try {
        const studentInfo = await StudentInfo.findAll();
        res.status(200).json(studentInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentInfoById = async (req, res) => {
    try {
        const studentInfo = await StudentInfo.findByPk(req.params.id);
        studentInfo ? res.status(200).json(studentInfo) : res.status(404).json({ message: 'Student info not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createStudentInfo = async (req, res) => {
    try {
        const newStudentInfo = await StudentInfo.create(req.body);
        res.status(201).json(newStudentInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudentInfo = async (req, res) => {
    try {
        const [updated] = await StudentInfo.update(req.body, { where: { _id: req.params.id } });
        updated ? res.status(200).json(await StudentInfo.findByPk(req.params.id)) : res.status(404).json({ message: 'Student info not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStudentInfo = async (req, res) => {
    try {
        const deleted = await StudentInfo.destroy({ where: { _id: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Student info not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
