require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

const GoogleSheetsApiUrl = process.env.GOOGLE_SHEETS_KEY;

app.use(bodyParser.json());
app.use(cors());

app.post('/proxy', [
  body('Name').trim().isLength({ min: 1 }).withMessage('Imię jest wymagane'),
  body('Surname').trim().isLength({ min: 1 }).withMessage('Nazwisko jest wymagane'),
  body('Email').isEmail().withMessage('Nieprawidłowy adres email').normalizeEmail(),
  body('Classes').isIn(['group', 'pair', 'individual']).withMessage('Nieprawidłowy rodzaj zajęć'),
  body('Message').trim().isLength({ min: 1 }).withMessage('Wiadomość jest wymagana')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log('Sanitized request body:', req.body);
    console.log('Google Sheets API URL:', GoogleSheetsApiUrl);

    const response = await axios.post(GoogleSheetsApiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
        // Dodaj nagłówki autoryzacji, jeśli są wymagane
        // 'Authorization': `Bearer ${your_access_token}`
      },
    });

    console.log('Response data:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);

    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    }

    res.status(500).json({ error: 'There was an error!', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
