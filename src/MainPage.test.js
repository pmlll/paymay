// MainPage.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from './pages/MainPage';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, getFirestore } from 'firebase/firestore';

// Мокаємо функції Firebase
jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
    auth: { currentUser: { uid: 'test-uid', email: 'test@example.com' } },
}));
jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(),
    doc: jest.fn(),
    getDoc: jest.fn(),
    setDoc: jest.fn(),
    updateDoc: jest.fn(),
}));

describe('MainPage', () => {
    beforeEach(() => {
        // Мокаємо функцію onAuthStateChanged
        onAuthStateChanged.mockImplementation((auth, callback) => {
            callback(auth.currentUser ? { uid: 'test-uid', email: 'test@example.com' } : null);
            return jest.fn();
        });

        // Мокаємо початковий стан даних користувача
        getDoc.mockResolvedValue({
            exists: () => true,
            data: () => ({
                name: 'Test User',
                balance: 1000,
                transactions: [],
            }),
        });

        setDoc.mockResolvedValue();
        updateDoc.mockResolvedValue();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('відображає інформацію про користувача та баланс', async () => {
        render(<MainPage />);

        // Перевіряємо, що інформація про користувача завантажується
        expect(screen.getByText('Loading user information...')).toBeInTheDocument();

    });

    test('обробляє поповнення балансу', async () => {
        render(<MainPage />);

        // Чекаємо завантаження балансу
        await waitFor(() => {
            expect(screen.getByText(/\$1000/)).toBeInTheDocument();
        });

        // Імітуємо введення суми для поповнення
        fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '200' } });
        fireEvent.click(screen.getByText(/Top Up/i));

        // Перевіряємо, що баланс оновився
        await waitFor(() => {
            expect(screen.getByText(/\$1200/)).toBeInTheDocument();
        });
    });

    test('обробляє переказ коштів', async () => {
        render(<MainPage />);

        // Чекаємо завантаження балансу
        await waitFor(() => {
            expect(screen.getByText(/\$1000/)).toBeInTheDocument();
        });

        // Імітуємо введення даних для переказу
        fireEvent.change(screen.getByLabelText(/Recipient Email/i), { target: { value: 'recipient@example.com' } });
        fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '200' } });
        fireEvent.click(screen.getByText(/Transfer/i));

        // Перевіряємо, що баланс оновився після переказу
        await waitFor(() => {
            expect(screen.getByText(/\$800/)).toBeInTheDocument();
        });
    });
});
