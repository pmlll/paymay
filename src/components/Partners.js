import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' },
        { name: 'MasterCard', logo: 'https://cdn.antaranews.com/cache/1200x800/2023/03/02/1-Mastercard-Logo.png' },
        { name: 'Privat24', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png' },
        { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    ];

    return (
        <div className="partners full-width">
            <h2>Our Partners</h2>
            <div className="partners-list">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-item">
                        <img src={partner.logo} alt={partner.name} className="partner-logo" />
                        <span>{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;