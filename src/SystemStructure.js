import React from 'react';
import './styles/SystemStructure.css';

const SystemStructure = () => {
    return (
        <div className="system-structure">
            {/* Title and Intro Section */}
            <section className="intro">
                <h1>Внутрішня структура нашої платіжної системи</h1>
                <p>Наша система побудована для забезпечення безпечного та ефективного оброблення платежів з використанням багаторівневої архітектури.</p>
            </section>

            {/* Architecture Diagram */}
            <section className="architecture-diagram">
                <h2>Архітектура системи</h2>
                <img src="architecture-diagram.png" alt="Архітектура платіжної системи" className="diagram-image" />
                <p>Ця діаграма показує основні компоненти нашої платіжної системи та їхню взаємодію.</p>
            </section>

            {/* Components Explanation */}
            <section className="components">
                <h2>Основні компоненти</h2>
                <div className="component">
                    <h3>Frontend</h3>
                    <p>Інтерфейс користувача, що дозволяє клієнтам легко взаємодіяти з системою для проведення платежів.</p>
                </div>
                <div className="component">
                    <h3>Backend</h3>
                    <p>Серверна логіка, яка обробляє запити, проводить валідацію та забезпечує зв’язок з базою даних і платіжним шлюзом.</p>
                </div>
                <div className="component">
                    <h3>База даних</h3>
                    <p>Зберігає інформацію про користувачів, історію транзакцій та інші важливі дані в зашифрованому вигляді.</p>
                </div>
                <div className="component">
                    <h3>Платіжний шлюз</h3>
                    <p>Забезпечує обробку та авторизацію платежів, здійснюючи взаємодію з банками та іншими фінансовими установами.</p>
                </div>
                <div className="component">
                    <h3>Security Layer</h3>
                    <p>Шифрування та багаторівневий захист для забезпечення безпеки даних користувачів та їхніх фінансових операцій.</p>
                </div>
            </section>

            {/* Transaction Process */}
            <section className="transaction-process">
                <h2>Процес проведення транзакції</h2>
                <ol>
                    <li><strong>Клієнт:</strong> Ініціює транзакцію через інтерфейс користувача.</li>
                    <li><strong>Backend:</strong> Приймає запит, валідує дані та перенаправляє їх на платіжний шлюз.</li>
                    <li><strong>Платіжний шлюз:</strong> Перевіряє платоспроможність користувача та авторизує платіж.</li>
                    <li><strong>Database:</strong> Зберігає інформацію про успішну транзакцію.</li>
                    <li><strong>Клієнт:</strong> Отримує повідомлення про статус транзакції.</li>
                </ol>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <button className="cta-button">Дізнатися більше про архітектуру</button>
            </section>
        </div>
    );
};

export default SystemStructure;
