import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';

const NewsList = ({ articles, loading }) => {
  if (loading) {
    return <div className="loading">Loading articles...</div>; // Show loading message with class
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>No articles available</div>; // Show a message if there are no articles
  }

  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsItem key={article.url || article.title} article={article} /> // Fallback to article.title for key
      ))}
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool, // Optional loading prop
};

NewsList.defaultProps = {
  loading: false, // Default value for loading prop
};

export default NewsList;
