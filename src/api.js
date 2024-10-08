const BASE_URL = 'https://newsapi.org/v2/';
const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Use environment variable

// Fetch general news
export const fetchNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&apikey=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching general news:", error);
        return { articles: [] }; // Return empty array if error occurs
    }
};

// Fetch trending news
export const fetchTrendingNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/everything?q=trending&apikey=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching trending news:", error);
        return { articles: [] };
    }
};

// Fetch top news
export const fetchTopNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&apikey=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching top news:", error);
        return { articles: [] };
    }
};
