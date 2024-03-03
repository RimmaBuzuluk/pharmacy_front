import { combineReducers, configureStore } from '@reduxjs/toolkit';
import typeFilter from './slice/typeFilter';

const rootReducer = combineReducers({
	typeFilter: typeFilter,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
