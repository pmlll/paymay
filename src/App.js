import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loginstart from './LoginStart';
import About from './AboutUs';


import Header from './components/Header';
import './App.css';
import MainPage from "./MainPage";
import Terms from "./Terms";
import Footer from "./components/Footer"
import Login from "./login"
import AuthCheck from "./AuthCheck";
import Signup from "./sighnup";
import ErrorPage from "./ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
    const [balance, setBalance] = useState(1000);

    return (
        <Router basename="/paymay">
            <ErrorBoundary>
            <div className="app dark-theme">
                <Header />
                <Routes>
                    <Route path="/" element={<AuthCheck><MainPage /></AuthCheck>} />
                    <Route path="/loginstart" element={<AuthCheck><Loginstart /></AuthCheck>} />
                    <Route path="/terms" element={<AuthCheck><Terms /></AuthCheck>} />
                    <Route path="/about" element={<AuthCheck><About /></AuthCheck>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />
                </ErrorBoundary>
        </Router>
    );
};

export default App;
