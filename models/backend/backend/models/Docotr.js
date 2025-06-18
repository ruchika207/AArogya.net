const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
  specialization: { type: String, required: true },
  experienceYears: { type: Number, default: 0 },
  phone: { type: String },
  email: { type: String, lowercase: true, trim: true },
  bio: { type: String },
  availableSlots: [{ 
    date: Date,
    startTime: String,
    endTime: String,
    isBooked: { type: Boolean, default: false }
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Doctor', doctorSchema);
