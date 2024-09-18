import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchNews } from '../api'; // API to fetch general news

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchNews(); // Fetch news for the homepage
            setArticles(news.articles);
        };
        loadNews();
    }, []);

    return (
        <div>
            <NewsList articles={articles} />
        </div>
    );
};

export default HomePage;
