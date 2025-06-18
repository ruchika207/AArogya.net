const Payment = require('../models/Payment');
const razorpay = require('../utils/razorpay');

// Create a payment order (Razorpay)
exports.createPaymentOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;
    const options = {
      amount: amount * 100, // amount in smallest currency unit (e.g., paise)
      currency,
      receipt,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Create payment order error:', error);
    res.status(500).json({ message: 'Failed to create payment order.' });
  }
};

// Save payment details after successful payment
exports.recordPayment = async (req, res) => {
  try {
    const { appointmentId, userId, amount, paymentMethod, paymentStatus, paymentId } = req.body;

    const payment = new Payment({
      appointment: appointmentId,
      user: userId,
      amount,
      paymentMethod,
      paymentStatus,
      paymentId,
    });

    await payment.save();

    // Update appointment payment status if needed here...

    res.status(201).json(payment);
  } catch (error) {
    console.error('Record payment error:', error);
    res.status(500).json({ message: 'Failed to record payment.' });
  }
};

// Get all payments (admin)
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('appointment')
      .populate('user', 'name email');
    res.json(payments);
  } catch (error) {
    console.error('Get payments error:', error);
    res.status(500).json({ message: 'Failed to fetch payments.' });
  }
};
