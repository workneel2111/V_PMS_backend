const CheckLog = require("../models/CheckLog");
const Pass = require("../models/Pass");

// CHECK-IN
const checkInVisitor = async (req, res) => {
    try {

        const pass = await Pass.findById(req.params.passId);

        if (!pass) {
            return res.status(404).json({
                message: "Pass not found"
            });
        }

        // Create log
        const log = await CheckLog.create({
            pass: pass._id,
            visitor: pass.visitor,
            checkInTime: new Date(),
            status: "checked-in"
        });

        res.status(201).json({
            message: "Visitor checked in successfully",
            log
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CHECK-OUT
const checkOutVisitor = async (req, res) => {
    try {

        const log = await CheckLog.findById(req.params.logId);

        if (!log) {
            return res.status(404).json({
                message: "Check-in log not found"
            });
        }

        log.checkOutTime = new Date();
        log.status = "checked-out";

        await log.save();

        res.json({
            message: "Visitor checked out successfully",
            log
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET ALL LOGS
const getLogs = async (req, res) => {
    try {

        const logs = await CheckLog.find()
            .populate("visitor")
            .populate("pass");

        res.json(logs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    checkInVisitor,
    checkOutVisitor,
    getLogs
};