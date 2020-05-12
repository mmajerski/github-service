const express = require("express");
const router = express.Router();

const Visits = require("./../../models/Visits");

router.get("/", async (req, res) => {
  const visits = await Visits.findByIdAndUpdate(
    "5eba6f87f1161f47e071c602",
    { $inc: { counter: 1 } },
    { new: true }
  );

  res.send({ visited: visits.counter });
});

module.exports = router;
