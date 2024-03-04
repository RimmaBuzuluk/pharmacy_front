import { combineReducers, configureStore } from '@reduxjs/toolkit';
import typeFilter from './slice/typeFilter';
import { authReducer } from './slice/auth';

const rootReducer = combineReducers({
	typeFilter: typeFilter,
	auth: authReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
