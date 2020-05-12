const express = require("express");
const router = express.Router();
const config = require("config");

const Visits = require("./../../models/Visits");

router.get("/", async (req, res) => {
  const visits = await Visits.findByIdAndUpdate(
    config.get("visitsCounter"),
    { $inc: { counter: 1 } },
    { new: true }
  );

  res.send({ visited: visits.counter });
});

module.exports = router;
