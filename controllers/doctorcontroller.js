const Doctor = require('../models/Doctor');

// Create new doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Create doctor error:', error);
    res.status(500).json({ message: 'Failed to create doctor.' });
  }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('user', 'name email').populate('hospital', 'name');
    res.json(doctors);
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({ message: 'Failed to fetch doctors.' });
  }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user', 'name email').populate('hospital', 'name');
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }
    res.json(doctor);
  } catch (error) {
    console.error('Get doctor error:', error);
    res.status(500).json({ message: 'Failed to fetch doctor.' });
  }
};

// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    console.error('Update doctor error:', error);
    res.status(500).json({ message: 'Failed to update doctor.' });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }
    res.json({ message: 'Doctor deleted successfully.' });
  } catch (error) {
    console.error('Delete doctor error:', error);
    res.status(500).json({ message: 'Failed to delete doctor.' });
  }
};
