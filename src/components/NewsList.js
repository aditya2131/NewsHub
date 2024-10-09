// NewsList.js
import React from 'react';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';

const NewsList = ({ articles }) => {
  // Check if articles is an array and has elements
  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>No articles available</div>; // Show a message if there are no articles
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
