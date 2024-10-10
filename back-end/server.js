require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: 'michaelshambel10@gmail.com',
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `Message: ${message}\n\nFrom: ${firstName} ${lastName}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response)
    });
});

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`);
});
