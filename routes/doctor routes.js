const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorcontroller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
