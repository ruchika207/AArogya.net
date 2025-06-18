const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  departments: [{ type: String }],
  description: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Hospital', hospitalSchema);
