import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './LoginStart';
import About from './AboutUs';

import AccountBalance from './components/AccountBalance';
import TransferForm from './components/TransferForm';
import TopUpForm from './components/TopUpForm';
import Partners from './components/Partners';
import TransactionHistory from './components/TransactionHistory';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';
import MainPage from "./MainPage";
import Terms from "./Terms";
import Footer from "./components/Footer"

const App = () => {
    const [balance, setBalance] = useState(1000);
    const user = { name: 'Maksym Hanych', email: 'hanych.maksym@student.uzhnu.edu.ua', status: 'Active' };

    const handleTransfer = ({ amount }) => {
        setBalance(balance - parseFloat(amount));
        alert(`Transferred $${amount}`);
    };

    const handleTopUp = ({ amount }) => {
        setBalance(balance + parseFloat(amount));
        alert(`Account topped up with $${amount}`);
    };

    return (
        <Router>
            <div className="app dark-theme">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
