import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	preparationType: null,
};

const typeFilter = createSlice({
	name: 'typeFilter', // Поправлено ім'я
	initialState,
	reducers: {
		setPreparationType: (state, action) => {
			state.preparationType = action.payload; // Виправлено помилку
		},
	},
});

export const { setPreparationType } = typeFilter.actions; // Експортуємо екшени

export default typeFilter.reducer; // Експортуємо редуктор
