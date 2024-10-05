const Student = require('../models/students.model.js');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        student ? res.status(200).json(student) : res.status(404).json({ message: 'Student not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const [updated] = await Student.update(req.body, { where: { _id: req.params.id } });
        updated ? res.status(200).json(await Student.findByPk(req.params.id)) : res.status(404).json({ message: 'Student not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.destroy({ where: { _id: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Student not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};