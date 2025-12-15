require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const { verifyToken } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

// 🔥 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

// TEST ROUTE
app.get("/api/profile", verifyToken, async (req, res) => {
  res.json({ message: "Protected profile", user: req.user });
});

// SERVER START
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
