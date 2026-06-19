const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

function createToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing.");
  }
  return jwt.sign(
    { id: user._id, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

// Signup route for Patients
router.post("/signup", async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    
    // Validate required fields
    if (!name || !phone || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Validate phone number format (must be exactly 10 digits)
    const cleanPhone = phone.trim();
    if (!/^\d{10}$/.test(cleanPhone)) {
      return res.status(400).json({ error: "Phone number must be exactly 10 digits" });
    }

    // Check if phone number already exists
    const exists = await User.findOne({ phone: cleanPhone });
    if (exists) {
      return res.status(409).json({ error: "Phone already exists" });
    }

    // Hash password and save new patient
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      phone: cleanPhone,
      role: "patient",
      passwordHash: hash
    });

    const token = createToken(user);
    
    // Ensure passwordHash is never returned in client response
    const userResponse = user.toObject();
    delete userResponse.passwordHash;

    return res.status(201).json({ message: "Signup success", token, user: userResponse });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Login route for both Patients and Doctors
router.post("/login", async (req, res) => {
  try {
    const { employeeId, phone, password } = req.body;

    if ((!employeeId && !phone) || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    let user;
    if (employeeId) {
      user = await User.findOne({ employeeId: employeeId.trim(), role: "doctor" });
    } else if (phone) {
      const cleanPhone = phone.trim();
      user = await User.findOne({ phone: cleanPhone, role: "patient" });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const token = createToken(user);

    // Strip passwordHash before response
    const userResponse = user.toObject();
    delete userResponse.passwordHash;

    return res.json({ message: "Login success", token, user: userResponse });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;