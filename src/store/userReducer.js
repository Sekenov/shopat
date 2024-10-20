const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, currentUser: action.payload }; // Устанавливаем пользователя
        case 'LOGOUT':
            return { ...state, currentUser: null }; // Очистка пользователя
        default:
            return state;
    }
};

export default userReducer;
