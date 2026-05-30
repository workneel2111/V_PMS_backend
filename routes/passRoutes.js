const express = require("express");

const router = express.Router();

const {
    generatePass,
    getPasses,
    downloadPassPDF
} = require("../controllers/passController");

// IMPORT MIDDLEWARE
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post(
    "/generate/:id",
    protect,
    authorize("admin", "security"),
    generatePass
);

router.get(
    "/",
    protect,
    getPasses
);

router.get(
    "/pdf/:id",
    protect,
    authorize("admin", "security"),
    downloadPassPDF
);

module.exports = router;