import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import AccountBalance from './components/AccountBalance';
import TransferForm from './components/TransferForm';
import TopUpForm from './components/TopUpForm';
import Partners from './components/Partners';
import TransactionHistory from './components/TransactionHistory';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';

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
                <Profile user={user} />
                <AccountBalance balance={balance} />
                <TransferForm onTransfer={handleTransfer} />
                <TopUpForm onTopUp={handleTopUp} />
                <TransactionHistory />
                <Partners />
            </div>
        </Router>

    );
};

export default App;
