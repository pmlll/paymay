import React from 'react';

const AccountBalance = ({ balance }) => {
    return (
        <div className="account-balance full-width">
            <h2>Your Balance</h2>
            <p>${balance}</p>
        </div>
    );
};

export default AccountBalance;
