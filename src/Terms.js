import React from 'react';
import './styles/Terms.css';
import Header from "./components/Header";

const Terms = () => {
    return (
        <div className="termspage">
            {/* Hero Section */}
            <section className="content-blockU">
                <h1>Умови користування</h1>
                <p>Будь ласка, ознайомтеся з нашими умовами перед використанням сервісу.</p>
            </section>

            {/* Acceptance Section */}
            <section className="terms-section">
                <h2>Прийняття умов</h2>
                <ul>
                    <li>Користуючись нашим сервісом, ви автоматично погоджуєтесь з усіма умовами.</li>
                    <li>Ми маємо право змінювати умови у будь-який час без попереднього повідомлення.</li>
                </ul>
            </section>

            {/* Usage Section */}
            <section className="terms-section">
                <h2>Правила користування сервісом</h2>
                <ul>
                    <li>Використовуйте сервіс виключно для законних цілей.</li>
                    <li>Уникайте дій, які можуть нашкодити платформі чи її користувачам.</li>
                    <li>Не надавайте неправдиву інформацію під час реєстрації чи використання сервісу.</li>
                </ul>
            </section>

            {/* Privacy Section */}
            <section className="terms-section">
                <h2>Конфіденційність</h2>
                <ul>
                    <li>Ваші особисті дані зберігаються згідно з політикою конфіденційності.</li>
                    <li>Ми зобов'язуємося забезпечувати захист ваших особистих даних.</li>
                    <li>Особиста інформація не передаватиметься третім особам без вашої згоди.</li>
                </ul>
            </section>

            {/* Changes Section */}
            <section className="terms-section">
                <h2>Зміни в умовах</h2>
                <ul>
                    <li>Ми залишаємо за собою право вносити зміни до умов користування.</li>
                    <li>Важливо регулярно перевіряти оновлення на цій сторінці.</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="terms-section">
                <h2>Контакти</h2>
                <ul>
                    <li>З питаннями чи пропозиціями звертайтесь до нашої служби підтримки.</li>
                    <li>Ми завжди готові допомогти вам з роз’ясненням умов користування.</li>
                </ul>
            </section>
        </div>
    );
};

export default Terms;
