import React from 'react';
import './profile.css';
import backButton from './img/backButton.svg';
import { useNavigate } from 'react-router-dom';
import negr from './img/negr.svg';

export default function Profile({ user }) { // Получаем user как пропс
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='profileBlock'>
            <div className="header-profile">
                <div className="but1" onClick={handleBackClick}>
                    <img src={backButton} alt="" />
                </div>
                <div className="but2">Profile</div>
                <div className="but3"></div>
            </div>

            <div className="avatar-profile">
                <img src={negr} alt="" className="ava-avatar" />
                <p className="name-avatar">{user.name || 'Не указано'}</p> {/* Отображаем имя */}
            </div>

            <div className="info-user">
                <div className="fullName">
                    <p className="name-fullName">Full Name</p>
                    <input type="text" className='name-user' value={user.name || ''} readOnly /> {/* Имя */}
                </div>

                <div className="emailAddress">
                    <p className="email-emailAddress">Email Address</p>
                    <input type="text" className='email-user' value={user.email || ''} readOnly /> {/* Электронная почта */}
                </div>

                {/* <div className="passwordPass">
                    <p className="password-pass">Password</p>
                    <input type="text" className='password-user' placeholder='Введите ваш пароль' readOnly /> 
                </div> */}
            </div>
        </div>
    );
}
