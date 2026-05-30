const express = require("express");

const router =
    express.Router();

const {
    exportVisitors,
    exportAppointments,
    exportPasses,
    exportLogs
} = require(
    "../controllers/reportController"
);

const protect =
    require("../middleware/authMiddleware");

const authorize =
    require("../middleware/roleMiddleware");

router.get(
    "/visitors",
    // protect,
    // authorize("admin"),
    exportVisitors
);

router.get(
    "/appointments",
    // protect,
    // authorize("admin"),
    exportAppointments
);

router.get(
    "/passes",
    // protect,
    // authorize("admin"),
    exportPasses
);

router.get(
    "/logs",
    // protect,
    // authorize("admin"),
    exportLogs
);

module.exports = router;