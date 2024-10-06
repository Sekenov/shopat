import React, { useState } from 'react';
import './SignUp.css';
import arrow from '../../img/fovorit/Arrow.png';
import gogle from '../../img/signin/Group 108.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    // Обработчик клика на кнопку "Back"
    const handleBackClick = () => {
        navigate(-1);
    };

    // Обработчик изменения полей ввода
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Обработчик отправки формы регистрации
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
                username: formData.name,
                email: formData.email,
                password: formData.password
            });
            console.log('Registration successful', response.data);

            // После успешной регистрации можно перенаправить пользователя, например, на страницу входа
            navigate('/');
        } catch (err) {
            console.error('Registration failed:', err.response?.data || err.message);
            setError(err.response?.data?.error?.message || 'Registration failed');
        }
    };

    return (
        <div className="Signin">
            <header className="headerup">
                <div className="up_container_arrow">
                    <div className="imgup_arrow" onClick={handleBackClick}>
                        <img className="arrow" src={arrow} alt="Back" />
                    </div>
                </div>
            </header>

            <nav className="title">
                <div className="up_text">
                    <h1 className='up_hel'>Create Account</h1>
                    <p className='up_wel'>Let’s Create Account Together</p>
                </div>
            </nav>

            <form className="up-registr" onSubmit={handleFormSubmit}>
                <div className="up-column">
                    <h1 className='up'>Name</h1>
                </div>
                <div className="inputForm">
                    <input
                        type="text"
                        className="up_input up_ema"
                        placeholder="Enter your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="up-column">
                    <h1 className='up'>Email Address</h1>
                </div>
                <div className="inputForm">
                    <input
                        type="email"
                        className="up_input up_ema"
                        placeholder="Enter your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="up_btn">
                    <button className="up_button_sign" type="submit">
                        Sign Up
                    </button>

                    <button className="up_button_google">
                        <img src={gogle} alt="Google" />
                        Sign in with Google
                    </button>

                    <p className="up_have">Already have an account? <Link to="/signin" className="up_free">Sign In</Link></p>
                </div>
            </form>
        </div>
    );
}
