import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});