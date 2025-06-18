const Hospital = require('../models/Hospital');

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    await hospital.save();
    res.status(201).json(hospital);
  } catch (error) {
    console.error('Create hospital error:', error);
    res.status(500).json({ message: 'Failed to create hospital.' });
  }
};

// Get all hospitals
exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    console.error('Get hospitals error:', error);
    res.status(500).json({ message: 'Failed to fetch hospitals.' });
  }
};

// Get a hospital by ID
exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found.' });
    }
    res.json(hospital);
  } catch (error) {
    console.error('Get hospital error:', error);
    res.status(500).json({ message: 'Failed to fetch hospital.' });
  }
};

// Update hospital
exports.updateHospital = async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHospital) {
      return res.status(404).json({ message: 'Hospital not found.' });
    }
    res.json(updatedHospital);
  } catch (error) {
    console.error('Update hospital error:', error);
    res.status(500).json({ message: 'Failed to update hospital.' });
  }
};

// Delete hospital
exports.deleteHospital = async (req, res) => {
  try {
    const deletedHospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!deletedHospital) {
      return res.status(404).json({ message: 'Hospital not found.' });
    }
    res.json({ message: 'Hospital deleted successfully.' });
  } catch (error) {
    console.error('Delete hospital error:', error);
    res.status(500).json({ message: 'Failed to delete hospital.' });
  }
};
