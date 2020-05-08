const express = require("express");
const router = express.Router();

// @desc    Test
// @route   GET /api/posts
// @access  Public
router.get("/", (req, res) => res.send("posts router"));

module.exports = router;
