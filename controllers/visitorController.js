const Visitor = require("../models/Visitor");

// CREATE VISITOR
const createVisitor = async (req, res) => {
    try {
        const { fullName, email, phone, address, purpose, company } = req.body;

        const visitor = await Visitor.create({
            fullName,
            email,
            phone,
            address,
            purpose,
            company,
            photo: req.file ? req.file.filename : null
        });

        res.status(201).json({
            message: "Visitor created successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL VISITORS
const getVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find().sort({ createdAt: -1 });

        res.json(visitors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createVisitor, getVisitors };