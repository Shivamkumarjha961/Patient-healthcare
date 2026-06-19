require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

async function seed() {
  try {
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI is missing from environment variables.");
      process.exit(1);
    }
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // Check if the doctor already exists
    const exists = await User.findOne({ employeeId: "DOC1001" });
    if (exists) {
      console.log("Doctor already exists (employeeId: DOC1001). Skipping seed.");
      await mongoose.connection.close();
      process.exit(0);
    }

    // We must check if the phone number we are seeding is already taken by another user
    const phoneExists = await User.findOne({ phone: "9999999999" });
    if (phoneExists) {
      console.error("Conflict: Phone number '9999999999' is already in use by another user.");
      await mongoose.connection.close();
      process.exit(1);
    }

    // Hash doctor password and create doctor user
    const hash = await bcrypt.hash("doctorpass", 10);
    await User.create({
      role: "doctor",
      employeeId: "DOC1001",
      phone: "9999999999", // Added required unique 10-digit phone field
      name: "Dr. Seed User",
      passwordHash: hash
    });

    console.log("Successfully seeded doctor user: employeeId: DOC1001 / phone: 9999999999 / password: doctorpass");
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("Database seeding failed:", err);
    try {
      await mongoose.connection.close();
    } catch (closeErr) {
      console.error("Error closing connection:", closeErr);
    }
    process.exit(1);
  }
}

seed();