const express = require("express");
const router = express.Router();

// @desc    Test
// @route   GET /api/auth
// @access  Public
router.get("/", (req, res) => res.send("auth router"));

module.exports = router;
