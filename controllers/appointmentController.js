const Appointment = require("../models/Appointment");

// CREATE APPOINTMENT (Visitor requests meeting)
const createAppointment = async (req, res) => {
    try {
        const { visitor, host, date, time, purpose, notes } = req.body;

        const appointment = await Appointment.create({
            visitor,
            host,
            date,
            time,
            purpose,
            notes
        });

        res.status(201).json({
            message: "Appointment created successfully",
            appointment
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL APPOINTMENTS
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate("visitor")
            .populate("host")
            .sort({ createdAt: -1 });

        res.json(appointments);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE STATUS (Approve / Reject)
const updateAppointmentStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        appointment.status = status;

        await appointment.save();

        res.json({
            message: `Appointment ${status}`,
            appointment
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAppointment,
    getAppointments,
    updateAppointmentStatus
};