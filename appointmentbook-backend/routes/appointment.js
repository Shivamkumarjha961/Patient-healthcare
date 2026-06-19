const express = require("express");
const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// CREATE APPOINTMENT
router.post("/create", verifyToken, async (req, res) => {
  try {
    const { doctorName, date, time, symptoms } = req.body;

    // Validate required fields
    if (!doctorName || !date || !time) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Check if req.user contains id
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Invalid user authentication data" });
    }

    const appt = await Appointment.create({
      patientId: req.user.id,
      doctorName: doctorName.trim(),
      date: date.trim(),
      time: time.trim(),
      symptoms: symptoms ? symptoms.trim() : "",
    });

    return res.status(201).json({ success: true, appointment: appt });
  } catch (err) {
    // Handle MongoDB unique duplicate key error (11000)
    if (err.code === 11000) {
      return res.status(409).json({
        error: "This time slot for this doctor is already booked",
      });
    }

    console.error("Create appointment error:", err);
    return res.status(500).json({
      error: "Failed to create appointment",
    });
  }
});

// GET MY APPOINTMENTS
router.get("/mine", verifyToken, async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Invalid user authentication data" });
    }

    const appts = await Appointment.find({
      patientId: req.user.id,
    });
    return res.json(appts);
  } catch (err) {
    console.error("Fetch appointments error:", err);
    return res.status(500).json({
      error: "Failed to fetch appointments",
    });
  }
});

// DELETE (CANCEL) APPOINTMENT 
router.delete("/cancel/:id", verifyToken, async (req, res) => {
  try {
    const appointmentId = req.params.id;

    // Validate if appointmentId is a valid Mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
      return res.status(400).json({ error: "Invalid appointment ID format" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Invalid user authentication data" });
    }

    const appt = await Appointment.findOneAndDelete({
      _id: appointmentId,
      patientId: req.user.id,
    });

    if (!appt) {
      return res.status(404).json({
        error: "Appointment not found",
      });
    }

    return res.json({
      success: true,
      message: "Appointment cancelled successfully",
    });
  } catch (err) {
    console.error("Cancel appointment error:", err);
    return res.status(500).json({
      error: "Failed to cancel appointment",
    });
  }
});

module.exports = router;
