import React, { useState } from 'react';
import './SignIn.css';
import arrow from '../../img/fovorit/Arrow.png';
import google from '../../img/signin/Group 108.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// Компонент для отображения индикатора загрузки
const LoadingOverlay = () => (
    <div className="overlay">
        <div className="loading-square center-content">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Signing in...</p>
        </div>
    </div>
);

// Компонент для отображения ошибки
const ErrorOverlay = ({ message, onClose }) => (
    <div className="overlay" onClick={onClose}>
        <div className="error-square center-content" onClick={(e) => e.stopPropagation()}>
            <i className="fas fa-exclamation-triangle"></i>
            <p>{message}</p>
        </div>
    </div>
);

export default function SignIn({ setUser }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
const dispatch = useDispatch();

    const handleBackClick = () => {
        navigate(-1);
    };

    // В методе handleSignIn после успешного входа
    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
                identifier: email,
                password: password,
            });

            const userData = response.data.user;

            // Диспатчим LOGIN действие с id, name и email
            dispatch({ type: 'LOGIN', payload: { id: userData.id, name: userData.username, email: userData.email } });

            // Сохранение пользователя в localStorage
            localStorage.setItem('user', JSON.stringify({ name: userData.username, email: userData.email, id: userData.id }));

            console.log('Login successful', response.data);
            navigate('/profile');
        } catch (err) {
            setError('Login failed. Please try again.');
            console.error('Error during login', err);
        } finally {
            setLoading(false);
        }
    };
    

    
    
    

    return (
        <div className="Signin">
            {loading && <LoadingOverlay />} {/* Отображаем индикатор загрузки */}
            {error && <ErrorOverlay message={error} onClose={() => setError('')} />} {/* Отображаем сообщение об ошибке */}

            <header className="header">
                <div className="container_arrow">
                    <div className="img_arrow" onClick={handleBackClick}>
                        <img className="arrow" src={arrow} alt=""></img>
                    </div>
                </div>
            </header>

            <nav className="title">
                <div className="text">
                    <h1 className='hel'>Hello Again!</h1>
                    <p className='wel'>Welcome Back You’ve Been Missed!</p>
                </div>
            </nav>

            <form className="form-registr" onSubmit={handleSignIn}>
                <div className="flex-column">
                    <h1 className='em'>Email Address</h1>
                </div>

                <div className="inputForm">
                    <input
                        type="text"
                        className="input ema"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex-column">
                    <h1 className='em'>Password</h1>
                </div>

                <div className="inputForm">
                    <input
                        type="password"
                        className="input pas"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex-row">
                    <div></div>
                    <span className="recovery"><a href="/">Recovery Password</a></span>
                </div>

                <div className="btn">
                    <button className="button-sign" type="submit" disabled={loading}>
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>

                    <button className="button-google">
                        <img src={google} alt="" />
                        Sign in with Google
                    </button>
                    <p className="have">Don’t have an account? <Link to={"/signup"} className="free">Sign Up for Free</Link></p>
                </div>
            </form>
        </div>
    );
}
