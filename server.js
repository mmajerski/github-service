const express = require("express");
const connectDB = require("./config/db");
const Visits = require("./models/Visits");

const app = express();

connectDB();

// parsing to json
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/visits", async (req, res) => {
  const visits = await Visits.findByIdAndUpdate(
    "5eba6f87f1161f47e071c602",
    { $inc: { counter: 1 } },
    { new: true }
  );

  res.send({ visited: visits.counter });
});

// routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
