import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
    <nav id="nav-bar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
