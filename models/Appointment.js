const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  doctorName: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  symptoms: String,

  status: {
    type: String,
    enum: ["pending", "cancelled"],
    default: "pending",
  },
});

appointmentSchema.index(
  { doctorName: 1, date: 1, time: 1 },
  { unique: true, partialFilterExpression: { status: "pending" } }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
