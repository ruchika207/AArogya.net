const { sendEmail } = require('../utils/emailService');

// Send a generic email
exports.sendGenericEmail = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ message: 'Missing required email fields.' });
    }

    const info = await sendEmail({ to, subject, text, html });
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};

// Send appointment confirmation email
exports.sendAppointmentConfirmation = async (req, res) => {
  try {
    const { to, appointmentDetails } = req.body;
    if (!to || !appointmentDetails) {
      return res.status(400).json({ message: 'Missing required info.' });
    }
    const subject = 'Appointment Confirmation';
    const text = `Your appointment is confirmed: ${appointmentDetails}`;
    const html = `<p>Your appointment is confirmed:</p><p>${appointmentDetails}</p>`;

    const info = await sendEmail({ to, subject, text, html });
    res.status(200).json({ message: 'Confirmation email sent', info });
  } catch (error) {
    console.error('Appointment email error:', error);
    res.status(500).json({ message: 'Failed to send appointment email.' });
  }
};
