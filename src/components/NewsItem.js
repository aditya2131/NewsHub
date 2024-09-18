// NewsItem.js
import React from 'react';
import '../styles/NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item" onClick={() => window.open(article.url, '_blank')}>
      <div className="news-image">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
