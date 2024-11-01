import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Signup = () => {
    const navigate = useNavigate();
    const db = getFirestore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // State for the user's name

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user's name to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                // Add more fields as necessary
            });

            console.log(user);
            navigate("/login");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    };

    return (
        <main>
            <section>
                <div>
                    <div>
                        <form>
                            <div>
                                <div className="content-block">
                                    <h2>Реєстрація</h2>
                                    <p>Швидко та безпечно.</p>
                                </div>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>
                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Signup;
