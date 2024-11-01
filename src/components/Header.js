// Header.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/Header.css';
import logoA from "../img/logo.png";

const Header = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Проверка состояния пользователя
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        // Очистка слушателя при размонтировании компонента
        return () => unsubscribe();
    }, []);

    // Функция для выхода
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <header className="header full-width">
            <div className="logof">
                <img src={logoA} alt="Логотип" className="logo-image" />
            </div>
            <nav className="nav">
                <Link to="/" className="nav-button">Головна</Link>
                <Link to="/about" className="nav-button">Про нас</Link>
                <Link to="/terms" className="nav-button">Умови</Link>


                {isAuthenticated ? (
                    <button onClick={handleLogout} className="nav-button1">Вихід</button>
                ) : (
                    <button className="nav-button1">Вхід</button>
                )}
            </nav>
        </header>
    );
};

export default Header;
