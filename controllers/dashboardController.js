const Visitor = require("../models/Visitor");
const Appointment = require("../models/Appointment");
const Pass = require("../models/Pass");
const CheckLog = require("../models/CheckLog");

const getDashboardStats = async (req, res) => {
    try {

        const totalVisitors =
            await Visitor.countDocuments();

        const totalAppointments =
            await Appointment.countDocuments();

        const approvedAppointments =
            await Appointment.countDocuments({
                status: "approved"
            });

        const totalPasses =
            await Pass.countDocuments();

        const totalLogs =
            await CheckLog.countDocuments();

        res.json({
            totalVisitors,
            totalAppointments,
            approvedAppointments,
            totalPasses,
            totalLogs
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getDashboardStats
};