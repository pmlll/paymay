import React from 'react';
import './styles/LoginStart.css';
import Header from "./components/Header";


const LoginStart = () => {
    return (

        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <h1>Швидкі та безпечні платежі для кожного</h1>
                <p>Наша платіжна система дозволяє здійснювати миттєві перекази в будь-якій точці світу з найвищим рівнем захисту.</p>
                <button className="cta-button">Зареєструватися зараз</button>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Наші Переваги</h2>
                <div className="feature-list">
                    <div className="feature">
                        <h3>Безпека на першому місці</h3>
                        <p>Захищені транзакції завдяки новітнім технологіям шифрування.</p>
                    </div>
                    <div className="feature">
                        <h3>Миттєві транзакції</h3>
                        <p>Швидкі перекази без зайвих затримок, незалежно від місцезнаходження.</p>
                    </div>
                    <div className="feature">
                        <h3>Глобальна доступність</h3>
                        <p>Простий та зручний доступ до сервісу з будь-якої точки світу.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>Відгуки наших клієнтів</h2>
                <div className="testimonial">
                    <p>"Це дійсно спростило моє життя. Тепер я можу переказувати кошти миттєво!"</p>
                    <p>- Олена, підприємець</p>
                </div>
                <div className="testimonial">
                    <p>"Надійна платформа з чудовою підтримкою клієнтів. Рекомендую!"</p>
                    <p>- Андрій, фрілансер</p>
                </div>
            </section>

            {/* Security Section */}
            <section className="security">
                <h2>Захист ваших даних</h2>
                <p>Ми застосовуємо багаторівневий захист для забезпечення безпеки вашої інформації та коштів. Платіть безпечно з нашою системою.</p>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <button className="cta-button">Почати зараз</button>
            </section>
        </div>
    );
};

export default LoginStart;
