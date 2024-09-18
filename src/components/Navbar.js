import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <i className="fas fa-info-circle"></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/trending" activeClassName="active">
                        <i className="fas fa-chart-line"></i> Trending
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/top-news" activeClassName="active">
                        <i className="fas fa-newspaper"></i> Top News
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
