// api/send-email.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'delmo123123@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'An error occurred while sending the email.' });
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
      }
    });
  } else {
    res.status(405).json({ error: 'Invalid request method' });
  }
};
