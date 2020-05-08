const express = require("express");
const router = express.Router();

// @desc    Get all users
// @route   GET /api/users
// @access  Public
router.get("/", (req, res) => res.send("user router"));

module.exports = router;
