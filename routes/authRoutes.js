const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getAllUsers
} = require("../controllers/authController");

// Register user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get all users
router.get("/users", getAllUsers);

module.exports = router;