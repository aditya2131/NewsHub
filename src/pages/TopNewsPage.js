import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchTopNews } from '../api'; // API to fetch top news

const TopNewsPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadTopNews = async () => {
            const news = await fetchTopNews();
            setArticles(news.articles);
        };
        loadTopNews();
    }, []);

    return (
        <div>
            <NewsList articles={articles} />
        </div>
    );
};

export default TopNewsPage;
