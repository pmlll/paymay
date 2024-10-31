import React, { useState } from 'react';

const TransferForm = ({ onTransfer }) => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTransfer({ amount, recipient });
        setAmount('');
        setRecipient('');
    };

    return (
        <form onSubmit={handleSubmit} className="content-block">
            <h2>Перевести кошти</h2>
            <input
                type="number"
                placeholder="Кількість"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Отримувач"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
            />
            <button type="submit">Transfer</button>
        </form>
    );
};

export default TransferForm;
