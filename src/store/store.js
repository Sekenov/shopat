import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer'; // Импортируйте редюсер

const rootReducer = combineReducers({
    user: userReducer, // Добавьте редюсер к корневому редюсеру
    // другие редюсеры...
});

const store = createStore(rootReducer);

export default store;
