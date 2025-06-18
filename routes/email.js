const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailcontroller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/send', emailController.sendGenericEmail);
router.post('/appointment-confirmation', emailController.sendAppointmentConfirmation);

module.exports = router;
