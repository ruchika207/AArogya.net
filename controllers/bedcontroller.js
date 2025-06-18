const Bed = require('../models/Bed');

// Create a new bed
exports.createBed = async (req, res) => {
  try {
    const bed = new Bed(req.body);
    await bed.save();
    res.status(201).json(bed);
  } catch (error) {
    console.error('Create bed error:', error);
    res.status(500).json({ message: 'Failed to create bed.' });
  }
};

// Get all beds
exports.getBeds = async (req, res) => {
  try {
    const beds = await Bed.find().populate('hospital', 'name');
    res.json(beds);
  } catch (error) {
    console.error('Get beds error:', error);
    res.status(500).json({ message: 'Failed to fetch beds.' });
  }
};

// Get bed by ID
exports.getBedById = async (req, res) => {
  try {
    const bed = await Bed.findById(req.params.id).populate('hospital', 'name');
    if (!bed) {
      return res.status(404).json({ message: 'Bed not found.' });
    }
    res.json(bed);
  } catch (error) {
    console.error('Get bed error:', error);
    res.status(500).json({ message: 'Failed to fetch bed.' });
  }
};

// Update bed
exports.updateBed = async (req, res) => {
  try {
    const updatedBed = await Bed.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBed) {
      return res.status(404).json({ message: 'Bed not found.' });
    }
    res.json(updatedBed);
  } catch (error) {
    console.error('Update bed error:', error);
    res.status(500).json({ message: 'Failed to update bed.' });
  }
};

// Delete bed
exports.deleteBed = async (req, res) => {
  try {
    const deletedBed = await Bed.findByIdAndDelete(req.params.id);
    if (!deletedBed) {
      return res.status(404).json({ message: 'Bed not found.' });
    }
    res.json({ message: 'Bed deleted successfully.' });
  } catch (error) {
    console.error('Delete bed error:', error);
    res.status(500).json({ message: 'Failed to delete bed.' });
  }
};
