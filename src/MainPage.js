import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc, setDoc, updateDoc, getFirestore } from 'firebase/firestore';

import AccountBalance from './components/AccountBalance';
import TransferForm from './components/TransferForm';
import TopUpForm from './components/TopUpForm';
import TransactionHistory from './components/TransactionHistory';
import Profile from './components/Profile';
import Partners from "./components/Partners";

const MainPage = () => {
    const [balance, setBalance] = useState(0); // Start with 0 for balance
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(db, 'users', currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUser({
                        name: userData.name || 'Unnamed User',
                        email: currentUser.email,
                        status: 'Активний',
                    });
                    setBalance(parseFloat(userData.balance) || 0);
                    setTransactions(userData.transactions || []);
                } else {
                    await setDoc(userDocRef, {
                        balance: 1200,
                        transactions: []
                    });
                    setBalance(1200);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [db]);

    const updateBalanceInFirestore = async (newBalance, newTransactions) => {
        if (!user) return;

        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userDocRef, {
            balance: newBalance,
            transactions: newTransactions
        });
    };

    const handleTransfer = async ({ amount, recipient }) => {
        const transferAmount = parseFloat(amount);
        if (isNaN(transferAmount) || transferAmount <= 0) {
            alert('Введіть додатнє число.');
            return;
        }
        if (transferAmount > balance) {
            alert('Низький баланс.');
            return;
        }
        const recipientQuery = query(collection(db, 'users'), where('email', '==', recipient));
        const recipientSnapshot = await getDocs(recipientQuery);
        if (recipientSnapshot.empty) {
            alert('Користувача неіснує.');
            return;
        }
        const recipientDoc = recipientSnapshot.docs[0];
        const recipientData = recipientDoc.data();
        const recipientNewBalance = (parseFloat(recipientData.balance) || 0) + transferAmount;
        await updateDoc(doc(db, 'users', recipientDoc.id), {
            balance: recipientNewBalance
        });

        const newSenderBalance = balance - transferAmount;
        const newTransaction = { type: 'Transfer', amount: -transferAmount, recipient, date: new Date().toLocaleString() };


        setBalance(newSenderBalance);
        setTransactions(prev => [...prev, newTransaction]);

        await updateBalanceInFirestore(newSenderBalance, [...transactions, newTransaction]);

        alert(`Переказано $${transferAmount} на ${recipient}.`);
    };

    const handleTopUp = ({ amount }) => {
        const topUpAmount = parseFloat(amount);
        if (isNaN(topUpAmount) || topUpAmount <= 0) {
            alert('Введіть додатнє число.');
            return;
        }

        const updatedBalance = balance + topUpAmount;
        const newTransaction = { type: 'Поповнення', amount: topUpAmount, date: new Date().toLocaleString() };

        setBalance(updatedBalance);
        setTransactions(prev => [...prev, newTransaction]);
        updateBalanceInFirestore(updatedBalance, [...transactions, newTransaction]);
        alert(`Акаунт поповнено на $${topUpAmount}`);
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

export default MainPage;
