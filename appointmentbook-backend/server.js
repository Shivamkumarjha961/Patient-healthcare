require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const { verifyToken } = require("./middleware/auth");

// Validate critical environment variables
if (!process.env.MONGO_URI) {
  console.error("CRITICAL: MONGO_URI environment variable is missing.");
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error("CRITICAL: JWT_SECRET environment variable is missing.");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Security and Logging Middleware
app.use(helmet());

// Production combined logs, development dev logs
const isProduction = process.env.NODE_ENV === "production";
app.use(morgan(isProduction ? "combined" : "dev"));

// Body parsing with safe size limits
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Dynamic CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
  : [
      "http://localhost:5173", // React/Vite local development
      "http://localhost:3000", // React/Next.js local development
      "https://patient-healthcare.vercel.app", // Fallback production Vercel domain
      "https://doctor-appointment-frontend-beige-xi.vercel.app" // Actual production Vercel frontend domain
    ];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"), false);
  },
  credentials: true
}));

// Rate Limiting for Auth routes to prevent abuse
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 signup/login requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login/signup attempts, please try again after 15 minutes." }
});

// Health-check Endpoint
app.get("/api/health", async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  return res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
    database: dbStatus,
    memoryUsage: process.memoryUsage()
  });
});

// ROUTES
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/appointments", appointmentRoutes);

// TEST ROUTE
app.get("/api/profile", verifyToken, async (req, res) => {
  return res.json({ message: "Protected profile", user: req.user });
});

// 404 Route Not Found Handler
app.use((req, res, next) => {
  return res.status(404).json({ error: "Route not found" });
});

// Centralized Global Error Handler
app.use((err, req, res, next) => {
  if (err.name === "Error" && err.message === "Not allowed by CORS") {
    return res.status(400).json({ error: "CORS blocking: Origin not allowed." });
  }
  console.error("Unhandled Application Error:", err);
  return res.status(500).json({ error: "Internal server error" });
});

// Database connection events for monitoring
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB runtime connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB connection disconnected. Mongoose will attempt to reconnect.");
});

// SERVER START
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error("Failed to start server during DB connection:", err);
    process.exit(1);
  }
}

start();
