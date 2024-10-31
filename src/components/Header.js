import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import '../styles/Header.css';
import logoA from "../img/logo.png";
import Login from '../LoginStart';
import About from '../AboutUs';
const Header = () => {
    return (
        <>
            <header className="header full-width">
                <div className="logof">
                    <img src={logoA} alt="" className="logo-image" />
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-button">Головна</Link>
                    <Link to="/login" className="nav-button">Логін</Link>
                    <Link to="/about" className="nav-button">Про нас</Link>
                    <button className="nav-button">Контакты</button>
                </nav>
            </header>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default Header;
