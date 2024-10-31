import React from 'react';

const TransactionHistory = () => {
    const transactions = [
        { id: 1, date: '2024-10-30', amount: -50, description: 'Transfer to John Doe' },
        { id: 2, date: '2024-10-29', amount: 100, description: 'Top Up from Card' },
        { id: 3, date: '2024-10-28', amount: -20, description: 'Transfer to Jane Doe' },
    ];

    return (
        <div className="transaction-history full-width">
            <h2>Історія транзакцій</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.date} - {transaction.description}: ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;
