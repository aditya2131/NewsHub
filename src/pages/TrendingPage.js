// TrendingPage.js
import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchTrendingNews } from '../api'; // API to fetch trending news

const TrendingPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadTrendingNews = async () => {
            try {
                const news = await fetchTrendingNews();
                setArticles(news.articles);
            } catch (error) {
                console.error('Error loading trending news:', error);
            }
        };
        loadTrendingNews();
    }, []);

    return (
        <div>
            <NewsList articles={articles} />
        </div>
    );
};

export default TrendingPage;
