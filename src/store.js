import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Redux/reducers';

const store = configureStore({
    reducer: rootReducer,
});

export default store;