/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();
const cors = require('cors');

app.use(cors());
// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Define an API endpoint for handling form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log('received');
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
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
