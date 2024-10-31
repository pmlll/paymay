import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import '../styles/Header.css';
import logoA from "../img/logo.png";
const Header = () => {
    return (
            <header className="header full-width">
                <div className="logof">
                    <img src={logoA} alt="" className="logo-image" />
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-button">Головна</Link>
                    <Link to="/about" className="nav-button">Про нас</Link>
                    <Link to="/terms" className="nav-button">Умови</Link>
                    <Link to="/login" className="nav-button">Логін</Link>
                </nav>
            </header>

    );
};

export default Header;
