const BASE_URL = 'https://newsapi.org/v2/';
const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Use environment variable

// Fetch news with error handling
const fetchFromAPI = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}&apikey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from News API:", error);
        return { articles: [] }; // Return empty array if an error occurs
    }
};

// Fetch general news
export const fetchNews = () => fetchFromAPI('top-headlines?country=us');

// Fetch trending news
export const fetchTrendingNews = () => fetchFromAPI('everything?q=trending');

// Fetch top news
export const fetchTopNews = () => fetchFromAPI('top-headlines?country=us');
