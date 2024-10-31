import React from 'react';

const TransactionHistory = ({ transactions }) => {
    return (
        <div className="transaction-history full-width">
            <h2>Transaction History</h2>
            {transactions.length === 0 ? (
                <p>No transactions yet</p>
            ) : (
                transactions.map((transaction, index) => (
                    <div key={index} className="transaction-item">
                        <span>{transaction.type}</span>
                        <span>{transaction.date}</span>
                        <span>${transaction.amount}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default TransactionHistory;
