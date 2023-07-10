// function slices will all lie here for this particular module and no sharing outside this module

import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: true,
		errorMessage: '',
		count: 0,
	},
	reducers: {
		setPostLLoadingTrue: state => {
			state.loading = true;
		},
		setPostLLoaded: (state, action) => {
			state.posts = action.payload;
		},
		setPostLLoadingFalse: state => {
			state.loading = false;
		},
		setPostLFailed: (state, action) => {
			state.error = action.payload;
		},
		increaseIncrement: state => {
			state.count += 1;
		},
	},
});

export const {
	setPostLLoadingTrue,
	setPostLLoaded,
	setPostLLoadingFalse,
	increaseIncrement,
	setPostLFailed,
} = postsSlice.actions;

export default postsSlice.reducer;
