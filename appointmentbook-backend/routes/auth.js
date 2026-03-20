const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

function createToken(user) {
  return jwt.sign(
    { id: user._id, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

router.post("/signup", async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    if (!name || !phone || !password)
      return res.status(400).json({ error: "Missing fields" });

    const exists = await User.findOne({ phone });
    if (exists) return res.status(400).json({ error: "Phone already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      phone,
      role: "patient",
      passwordHash: hash
    });

    const token = createToken(user);
    res.json({ message: "Signup success", token, user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { employeeId, phone, password } = req.body;
    let user;

    if (employeeId) user = await User.findOne({ employeeId, role: "doctor" });
    else if (phone) user = await User.findOne({ phone, role: "patient" });

    if (!user) return res.status(400).json({ error: "User not found" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Wrong password" });

    const token = createToken(user);
    res.json({ message: "Login success", token, user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;