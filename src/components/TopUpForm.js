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
        <form onSubmit={handleSubmit} className="content-block">
            <h2>Поповнити баланс</h2>
            <input
                type="text"
                placeholder="Номер картки"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Дійсна до (MM/YY)"
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
                placeholder="Кількість"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Поповнити</button>
        </form>
    );
};

export default TopUpForm;
