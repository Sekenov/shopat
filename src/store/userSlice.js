import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: JSON.parse(localStorage.getItem('user')) || null, // Загружаем из localStorage
        loading: false,
        error: null,
    },
    reducers: {
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            // Сохраняем данные пользователя в localStorage
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem('user'); // Удаляем данные пользователя из localStorage при выходе
        },
    },
});

export const { registerStart, registerSuccess, registerFail, logout } = userSlice.actions;
export default userSlice.reducer;
