import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loginstart from './pages/LoginStart';
import About from './pages/AboutUs';
import Header from './components/Header';
import './App.css';
import MainPage from "./pages/MainPage";
import Terms from "./pages/Terms";
import Footer from "./components/Footer"
import Login from "./pages/login"
import AuthCheck from "./AuthCheck";
import Signup from "./pages/sighnup";
import ErrorPage from "./ErrorPage";


const App = () => {
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
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />

        </Router>
    );
};

export default App;
