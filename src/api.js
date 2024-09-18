const apiKey = "197f1665791b4183a3ae2f545d954e18";
const BASE_URL = 'https://newsapi.org/v2/';

// Fetch general news top-headlines?country=us&apiKey=429b645771c34989950151e40366ab92
export const fetchNews = async () => {
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&apikey=${apiKey}`);
    const data = await response.json();
    return data;
};

// Fetch trending news (you can adjust the query to get trending news)
export const fetchTrendingNews = async () => {
    const response = await fetch(`${BASE_URL}/everything?q=trending&apikey=${apiKey}`);
    const data = await response.json();
    return data;
};

// Fetch top news (general top headlines)
export const fetchTopNews = async () => {
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&apikey=${apiKey}`);
    const data = await response.json();
    return data;
};
