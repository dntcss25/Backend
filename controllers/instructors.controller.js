const Instructors = require('../models/instructors.model.js');

exports.getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructors.findAll();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInstructorsById = async (req, res) => {
    try {
        const instructors = await Instructors.findByPk(req.params.id);
        instructors ? res.status(200).json(instructors) : res.status(404).json({ message: 'Instructors not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createInstructors = async (req, res) => {
    try {
        const newInstructors = await Instructors.create(req.body);
        res.status(201).json(newInstructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateInstructors = async (req, res) => {
    try {
        const [updated] = await Instructors.update(req.body, { where: { _id: req.params.id } });
        updated ? res.status(200).json(await Instructors.findByPk(req.params.id)) : res.status(404).json({ message: 'Instructors not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteInstructors = async (req, res) => {
    try {
        const deleted = await Instructors.destroy({ where: { _id: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Instructors not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};