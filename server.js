// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  // Allow cross-origin requests

// Fetch news data from NewsAPI
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country: 'us',
                apiKey: process.env.NEWS_API_KEY  // Get API key from environment variable
            }
        });
        res.json(response.data);  // Return the news data to frontend
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });  // Handle error
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
