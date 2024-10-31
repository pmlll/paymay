import React from 'react';
import './styles/AboutUs.css';
import Header from "./components/Header";

const AboutUs = () => {
    return (
        <div className="aboutpage">
            {/* Hero Section */}
            <section className="hero">
                <h1>Про нашу компанію</h1>
                <p>Ми об'єднуємо людей через інноваційні рішення для швидких, безпечних та доступних фінансових послуг.</p>
            </section>

            {/* Our Mission Section */}
            <section className="mission">
                <h2>Наша Місія</h2>
                <p>Ми прагнемо зробити світ фінансово доступним для кожного, незалежно від його місцезнаходження. Наші послуги побудовані на надійності, швидкості та простоті.</p>
            </section>

            {/* Core Values Section */}
            <section className="values">
                <h2>Наші Цінності</h2>
                <div className="value-list">
                    <div className="value">
                        <h3>Інноваційність</h3>
                        <p>Ми завжди у пошуках нових шляхів для покращення та створення ефективних рішень.</p>
                    </div>
                    <div className="value">
                        <h3>Надійність</h3>
                        <p>Ваші фінансові операції завжди у безпеці завдяки нашим передовим технологіям захисту.</p>
                    </div>
                    <div className="value">
                        <h3>Прозорість</h3>
                        <p>Ми відкрито ділимося всіма аспектами нашої роботи та завжди на зв'язку з клієнтами.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team">
                <h2>Наша Команда</h2>
                <p>Зібрана з професіоналів різних галузей, наша команда об’єднана спільною метою — забезпечити краще фінансове майбутнє.</p>
            </section>

            {/* Join Us Section */}
            <section className="join">
                <h2>Приєднуйтесь до нас</h2>
                <p>Приєднуйтесь до нашої спільноти, щоб відкрити для себе нові можливості у світі фінансів.</p>
                <button className="cta-button">Дізнатися більше</button>
            </section>
        </div>
    );
};

export default AboutUs;
