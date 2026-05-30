const express = require("express");

const router = express.Router();

const {
    checkInVisitor,
    checkOutVisitor,
    getLogs
} = require("../controllers/checkLogController");

// Check-in visitor
router.post("/checkin/:passId", checkInVisitor);

// Check-out visitor
router.put("/checkout/:logId", checkOutVisitor);

// Get all logs
router.get("/", getLogs);

module.exports = router;