require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const exists = await User.findOne({ employeeId: "DOC1001" });
  if (exists) {
    console.log("Doctor already exists");
    process.exit(0);
  }

  const hash = await bcrypt.hash("doctorpass", 10);
  await User.create({
    role: "doctor",
    employeeId: "DOC1001",
    name: "Dr. Seed User",
    passwordHash: hash
  });

  console.log("Seeded doctor: DOC1001 / doctorpass");
  process.exit(0);
}

seed();