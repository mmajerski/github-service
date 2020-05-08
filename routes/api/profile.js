const express = require("express");
const router = express.Router();

// @desc    Test
// @route   GET /api/profile
// @access  Public
router.get("/", (req, res) => res.send("profile router"));

module.exports = router;
