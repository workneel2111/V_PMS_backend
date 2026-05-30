const express = require("express");

const router = express.Router();

const {
    createAppointment,
    getAppointments,
    updateAppointmentStatus
} = require("../controllers/appointmentController");

// Create appointment
router.post("/", createAppointment);

// Get all appointments
router.get("/", getAppointments);

// Update appointment status
router.put("/:id", updateAppointmentStatus);

module.exports = router;