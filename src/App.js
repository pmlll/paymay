import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginstart from './LoginStart';
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
import Login from "./login"
import AuthCheck from "./AuthCheck";
import Signup from "./sighnup";

const App = () => {
    const [balance, setBalance] = useState(1000);

    return (
        <Router>
            <div className="app dark-theme">
                <Header />
                <Routes>
                    <Route path="/" element={<AuthCheck><MainPage /></AuthCheck>} />
                    <Route path="/loginstart" element={<AuthCheck><Loginstart /></AuthCheck>} />
                    <Route path="/terms" element={<AuthCheck><Terms /></AuthCheck>} />
                    <Route path="/about" element={<AuthCheck><About /></AuthCheck>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
