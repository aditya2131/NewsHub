// api.js
const BASE_URL = 'http://localhost:5000/api'; // Change to your server's base URL

// Fetch news with error handling
const fetchFromAPI = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from server:", error);
        return { articles: [] }; // Return empty array if an error occurs
    }
};

// Fetch general news
export const fetchNews = () => fetchFromAPI('/news'); // Fetch from server

// Fetch trending news
export const fetchTrendingNews = () => fetchFromAPI('/trending'); // Fetch from server

// Fetch top news
export const fetchTopNews = () => fetchFromAPI('/top-news'); // Fetch from server
