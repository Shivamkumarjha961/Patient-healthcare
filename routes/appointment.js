const router = require("express").Router();
const Appointment = require("../models/Appointment");
const { verifyToken } = require("../middleware/auth");

// CREATE APPOINTMENT
router.post("/create", verifyToken, async (req, res) => {
  try {
    const { doctorName, date, time, symptoms } = req.body;

    if (!doctorName || !date || !time) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const appt = await Appointment.create({
      patientId: req.user.id,
      doctorName,
      date,
      time,
      symptoms,
    });

    return res.json({ success: true, appointment: appt });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        error: "This time slot for this doctor is already booked",
      });
    }

    console.error(err);
    return res.status(500).json({
      error: "Failed to create appointment",
    });
  }
});

// GET MY APPOINTMENTS
router.get("/mine", verifyToken, async (req, res) => {
  try {
    const appts = await Appointment.find({
      patientId: req.user.id,
    });
    return res.json(appts);
  } catch (err) {
    return res.status(500).json({
      error: "Failed to fetch appointments",
    });
  }
});

// DELETE (CANCEL) APPOINTMENT 
router.delete("/cancel/:id", verifyToken, async (req, res) => {
  try {
    const appt = await Appointment.findOneAndDelete({
      _id: req.params.id,
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
    console.error(err);
    return res.status(500).json({
      error: "Failed to cancel appointment",
    });
  }
});

module.exports = router;
