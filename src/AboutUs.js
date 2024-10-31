import React from 'react';
import './styles/AboutUs.css';
import uzhnu from './img/uzhnu.jpg';
import card from './img/card.png';


const AboutUs = () => {
    return (
        <div className="aboutpage">
            {/* Hero Section */}
            <section className="content-blockU">
                <img src={card} alt="" className="hero-card" />
                <h1>Довіра та Інновації у Світі Банківських Послуг</h1>
                <p>Ми змінюємо світ фінансових послуг, створюючи прості та доступні рішення для кожного клієнта.</p>
            </section>



            {/* Core Values Section */}
            <section className="values">
                <h2>Наші Цінності</h2>
                <div className="value-list">
                    <div className="value">
                        <h3>Інноваційність</h3>
                        <p>Ми шукаємо нові рішення для поліпшення фінансових можливостей наших клієнтів.</p>
                    </div>
                    <div className="value">
                        <h3>Безпека</h3>
                        <p>Ваші фінансові дані захищені завдяки надійним технологіям захисту та шифрування.</p>
                    </div>
                    <div className="value">
                        <h3>Прозорість</h3>
                        <p>Чіткі та відкриті умови співпраці на кожному етапі.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team">
                <h2>Наша Команда</h2>
                <p>Команда, об'єднана спільною метою створення сучасного фінансового майбутнього для кожного клієнта.</p>
                <img src={uzhnu} alt="" className="section-image" />
            </section>

            {/* Join Us Section */}
            <section className="join">
                <h2>Приєднуйтесь до нас</h2>
                <p>Ставайте частиною нашої спільноти та отримуйте доступ до інноваційних рішень у сфері банківських послуг.</p>
                <button className="cta-button">Дізнатися більше</button>
            </section>
        </div>
    );
};

export default AboutUs;
