import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase'; // Import the Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';

import AccountBalance from './components/AccountBalance';
import TransferForm from './components/TransferForm';
import TopUpForm from './components/TopUpForm';
import Partners from './components/Partners';
import TransactionHistory from './components/TransactionHistory';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
const App = () => {
    const [balance, setBalance] = useState(1000);
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState(null); // State to hold user information
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // Get user data from Firestore
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUser({
                        name: userData.name || 'Unnamed User', // Get name from Firestore
                        email: currentUser.email,
                        status: 'Активний', // Modify this based on your app logic
                    });
                } else {
                    // Handle case where user document does not exist
                    setUser({
                        name: 'Unnamed User',
                        email: currentUser.email,
                        status: 'Активний',
                    });
                }
            } else {
                setUser(null); // User is signed out
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [db]);

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
            {user ? <Profile user={user} /> : <p>Loading user information...</p>}
            <AccountBalance balance={balance} />
            <TransferForm onTransfer={handleTransfer} />
            <TopUpForm onTopUp={handleTopUp} />
            <TransactionHistory transactions={transactions} />
            <Partners />
        </div>
    );
};

export default App;
