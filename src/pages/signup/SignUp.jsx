// SignUp.jsx
import React, { useState } from 'react';
import './SignUp.css';
import arrow from '../../img/fovorit/Arrow.png';
import google from '../../img/signin/Group 108.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем useDispatch и useSelector
import { registerStart, registerSuccess, registerFail } from '../../store/userSlice'; // Импортируем экшены

const LoadingOverlay = () => (
    <div className="overlay">
        <div className="loading-square center-content">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Registering...</p>
        </div>
    </div>
);

const ErrorOverlay = ({ message, onClose }) => (
    <div className="overlay" onClick={onClose}>
        <div className="error-square center-content" onClick={(e) => e.stopPropagation()}>
            <i className="fas fa-exclamation-triangle"></i>
            <p>{message}</p>
        </div>
    </div>
);

export default function SignUp({ setUser }) {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user); // Получаем состояние из Redux
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerStart());
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
                username: name,
                email: email,
                password: password,
            });

            const userData = { name: name, email: email };
            dispatch(registerSuccess(userData)); // Обновляем состояние пользователя
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/profile');
        } catch (err) {
            dispatch(registerFail('Registration failed. Please try again.'));
        }
    };

    const renderLoading = () => (
        <div className="loading-square center-content">
            <i className="fas fa-spinner"></i>
            <p>Loading...</p>
        </div>
    );

    const renderError = () => (
        <div className="error-square center-content">
            <i className="fas fa-exclamation-triangle"></i>
            <p>{error || 'An error occurred during registration.'}</p>
        </div>
    );

    return (
        <div className="Signup">
            {loading && renderLoading()} {/* Используем локальную функцию для отображения загрузки */}
            {error && renderError()} {/* Используем локальную функцию для отображения ошибок */}

            <header className="headerup">
                <div className="up_container_arrow">
                    <div className="imgup_arrow" onClick={() => navigate(-1)}>
                        <img className="arrow" src={arrow} alt="" />
                    </div>
                </div>
            </header>

            <nav className="title">
                <div className="up_text">
                    <h1 className='up_hel'>Create Account</h1>
                    <p className='up_wel'>Let’s Create Account Together</p>
                </div>
            </nav>

            <form className="up-registr" onSubmit={handleSubmit}>
                <div className="up-column">
                    <h1 className='up'>Name</h1>
                </div>
                <div className="inputForm">
                    <input
                        type="text"
                        className="up_input up_ema"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="up-column">
                    <h1 className='up'>Email Address</h1>
                </div>
                <div className="inputForm">
                    <input
                        type="text"
                        className="up_input up_ema"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="up-column">
                    <h1 className='up'>Password</h1>
                </div>
                <div className="inputForm">
                    <input
                        type="password"
                        className="up_input up_pas"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="up_btn">
                    <button className="up_button_sign" type="submit" disabled={loading}>
                        {loading ? 'Registering...' : 'Sign Up'}
                    </button>

                    <button className="up_button_google" type="button">
                        <img src={google} alt="" />
                        Sign in with Google
                    </button>
                    <p className="up_have">
                        Don’t have an account? <Link to="/signin" className="up_free">Sign Up for Free</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
