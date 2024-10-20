import React, { useState, useEffect } from 'react';
import './profile.css';
import backButton from './img/backButton.svg';
import { useNavigate } from 'react-router-dom';
import negr from './img/negr.svg';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Выход из аккаунта</h2>
                <p>Вы уверены, что хотите выйти из аккаунта?</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Выйти</button>
                    <button onClick={onDelete}>Удалить аккаунт</button>
                    <button onClick={onClose}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default function Profile() {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user); // Получаем текущего пользователя из Redux
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    // Загружаем данные пользователя из localStorage
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            // Обновляем Redux с данными пользователя
            dispatch({ type: 'LOGIN', payload: { id: parsedUser.id, name: parsedUser.name, email: parsedUser.email } });
        }
    }, [dispatch]);

    const handleLogout = async () => {
        // Выводим модальное окно с подтверждением
        if (window.confirm("Вы уверены, что хотите выйти из аккаунта?")) {
            // Удаляем пользователя из локального хранилища
            localStorage.removeItem('user');
            // Обнуляем пользователя в Redux
            dispatch({ type: 'LOGOUT' });

            // Перенаправляем на страницу входа
            navigate('/signin');
        }
    };

    const handleDeleteAccount = async () => {
        if (!currentUser) {
            console.error("Пользователь не найден. Убедитесь, что пользователь вошел в систему.");
            return; // Прекращаем выполнение, если currentUser не определен
        }

        if (window.confirm("Вы уверены, что хотите удалить свой аккаунт?")) {
            try {
                console.log("Удаляем аккаунт с ID:", currentUser.id);
                const response = await axios.delete(`${process.env.REACT_APP_API_URL}/users/${currentUser.id}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                });

                if (response.status === 200) {
                    // Удаляем данные из локального хранилища и Redux
                    localStorage.removeItem('user');
                    dispatch({ type: 'LOGOUT' });

                    // Перенаправляем на страницу регистрации
                    navigate('/signup');
                } else {
                    console.error("Ошибка при удалении аккаунта:", response.data);
                }
            } catch (error) {
                console.error("Ошибка при удалении аккаунта:", error);
            }
        }
    };

    return (
        <div className='profileBlock'>
            <div className="header-profile">
                <div className="but1" onClick={() => navigate(-1)}>
                    <img src={backButton} alt="" />
                </div>
                <div className="but2">Profile</div>
                <div className="but3" onClick={() => setModalOpen(true)}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </div>
            </div>

            <div className="avatar-profile">
                <img src={negr} alt="" className="ava-avatar" />
                <p className="name-avatar">{currentUser?.name || 'Не указано'}</p>
            </div>

            <div className="info-user">
                <div className="fullName">
                    <p className="name-fullName">Full Name</p>
                    <input type="text" className='name-user' value={currentUser?.name || ''} readOnly />
                </div>

                <div className="emailAddress">
                    <p className="email-emailAddress">Email Address</p>
                    <input type="text" className='email-user' value={currentUser?.email || ''} readOnly />
                </div>
            </div>

            <Modal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onConfirm={handleLogout} 
                onDelete={handleDeleteAccount} 
            />
        </div>
    );
}
