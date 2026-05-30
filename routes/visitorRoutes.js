const express = require("express");

const router = express.Router();

const upload = require("../utils/upload");

const {
    createVisitor,
    getVisitors
} = require("../controllers/visitorController");

// Create visitor
router.post(
    "/",
    upload.single("photo"),
    createVisitor
);

// Get all visitors
router.get("/", getVisitors);

module.exports = router;