require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Mailjet = require('node-mailjet');

// Add here your Mailjet API credentials Mike
const mailjet = Mailjet.apiConnect(
  'your-mailjet-api-key',
  'your-mailjet-secret-key'
);

const cors = require('cors');

const app = express();

// Make sure the port here is the front end port (cors connects backend port to front end port)
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'mike-sender@mail.com', // Your verified sender email on mailjet
            Name: 'Your Website Name',
          },
          To: [
            {
              Email: 'mike-receiver@mail.com', // Recipient email who will get the data
              Name: 'Recipient Name',
            },
          ],
          Subject: 'New Message from Contact Form',
          TextPart: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
        },
      ],
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
