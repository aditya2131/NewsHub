// server.js use only when in production mode

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow cross-origin requests

// Fetch top headlines from NewsAPI
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country: 'us',
                apiKey: process.env.NEWS_API_KEY // Get API key from environment variables
            }
        });
        res.json(response.data); // Return the news data to frontend
    } catch (error) {
        console.error('Error fetching top news:', error.message); // Log error for debugging
        res.status(500).json({ error: 'Failed to fetch top news' });
    }
});

// Fetch trending news from NewsAPI (example: query 'trending')
app.get('/api/trending', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: 'trending', // Example: searching for trending news
                apiKey: process.env.NEWS_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching trending news:', error.message);
        res.status(500).json({ error: 'Failed to fetch trending news' });
    }
});

// Fetch top news from NewsAPI (custom endpoint)
app.get('/api/top-news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country: 'us', // Example: top news in the US
                apiKey: process.env.NEWS_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching top news:', error.message);
        res.status(500).json({ error: 'Failed to fetch top news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
