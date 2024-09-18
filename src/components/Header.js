import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="header-logo">
          <h1>G-React News</h1>
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="./Footer">About Us</a></li>
              <li><a href="/trending">Trending</a></li>
              <li><a href="/top-news">TOP-News</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-title">
        <h2>G-REACT NEWS</h2>
      </div>
    </header>
  );
};

export default Header;
