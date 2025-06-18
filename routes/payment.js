const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentcontroller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/order', paymentController.createPaymentOrder);
router.post('/record', paymentController.recordPayment);
router.get('/', paymentController.getPayments);

module.exports = router;
