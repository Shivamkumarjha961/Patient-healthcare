const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String,
     enum: ["doctor", "patient"],
      required: true },
      
  employeeId: { type: String },
  phone: { type: String ,
      required: true, 
      unique: true , 
      trim:true,
      minLength: [10,"Phone number must be exactly 10 digits"], 
      maxLength: 10},

  name: { type: String,
        required: true },

  passwordHash: { type: String,
         required: true },
         
  createdAt: { type: Date,
         default: Date.now }
});

module.exports = mongoose.model("User", userSchema);