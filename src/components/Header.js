// Header.js
import React from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import necessary modules
import { signOut } from 'firebase/auth'; // Import signOut from firebase/auth
import { auth } from '../firebase'; // Import the auth instance
import '../styles/Header.css';
import logoA from "../img/logo.png";

const Header = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle logout
    const handleLogout = async () => {
        try {
            await signOut(auth); // Use the auth instance to sign out
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error("Error signing out: ", error); // Handle any errors
        }
    };

    return (
        <header className="header full-width">
            <div className="logof">
                <img src={logoA} alt="" className="logo-image" />
            </div>
            <nav className="nav">
                <Link to="/" className="nav-button">Головна</Link>
                <Link to="/about" className="nav-button">Про нас</Link>
                <Link to="/terms" className="nav-button">Умови</Link>
                <Link to="/login" className="nav-button">Вхід</Link>
                <button onClick={handleLogout} className="nav-button1">Вихід</button> {/* Logout button */}
            </nav>
        </header>
    );
};

export default Header;
