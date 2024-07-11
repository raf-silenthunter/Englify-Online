const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/proxy', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    
    const response = await axios.post('', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response data:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'There was an error!', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
