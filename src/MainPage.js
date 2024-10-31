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
    const [transactions, setTransactions] = useState([]);
    const user = { name: 'Ганич Максим Віталійович', email: 'hanych.maksym@student.uzhnu.edu.ua', status: 'Активний' };

    const handleTransfer = ({ amount }) => {
        setBalance(balance - parseFloat(amount));
        setTransactions([...transactions, { type: 'Переказ', amount: -parseFloat(amount), date: new Date().toLocaleString() }]);
        alert(`Переказ на $${amount} виконано.`);
    };

    const handleTopUp = ({ amount }) => {
        setBalance(balance + parseFloat(amount));
        setTransactions([...transactions, { type: 'Поповнення', amount: parseFloat(amount), date: new Date().toLocaleString() }]);
        alert(`Акаунт поповнено на $${amount}`);
    };

    return (
        <div className="app dark-theme">
            <Profile user={user} />
            <AccountBalance balance={balance} />
            <TransferForm onTransfer={handleTransfer} />
            <TopUpForm onTopUp={handleTopUp} />
            <TransactionHistory transactions={transactions} />
            <Partners />
        </div>
    );
};


export default App;
