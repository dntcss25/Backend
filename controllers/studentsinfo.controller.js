const Studentinfo = require('../models/studentsinfo.model.js');

exports.getAllStudentinfo = async (req, res) => {
    try {
        const studentinfo = await Studentinfo.findAll();
        res.status(200).json(studentinfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentinfoById = async (req, res) => {
    try {
        const studentinfo = await studentinfo.findByPk(req.params.id);
        if (studentinfo) {
            res.status(200).json(studentinfo);
        } else {
            res.status(404).json({ message: 'Student Info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createStudentinfo = async (req, res) => {
    try {
        const newStudentinfo = await Studentinfo.create(req.body);
        res.status(201).json(newStudentinfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudentinfo = async (req, res) => {
    try {
        const [updated] = await Studentinfo.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated) {
            const updatedStudentinfo = await Studentinfo.findByPk(req.params.id);
            res.status(200).json(updatedStudentinfo);
        } else {
            res.status(404).json({ message: 'Student Info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStudentinfo = async (req, res) => {
    try {
        const deleted = await Studentinfo.destroy({
            where: { _id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Student Info not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};