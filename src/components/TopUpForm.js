import React, { useState } from 'react';

const TopUpForm = ({ onTopUp }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTopUp({ cardNumber, expiry, cvv, amount });
        setCardNumber('');
        setExpiry('');
        setCvv('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="top-up-form full-width">
            <h2>Top Up Account</h2>
            <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Top Up</button>
        </form>
    );
};

export default TopUpForm;
