// We will have all the global users here

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		email: '',
		photo: '',
		error: '',
		loading: true,
	},
	reducers: {
		setUserLoginDetails(state, action) {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},
	},
});
