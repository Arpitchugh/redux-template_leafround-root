import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../module/posts/reducer/posts';
import posts from '../module/posts/reducer/posts';
// import all the reducers and pass them as an object to the configureStore function in a key-value pair.
// eg: import WowReducerName from '../features/featureName/featureNameSlice';
const store = configureStore({
	reducer: {
		// reducerName: WowReducerName,
		// ...
		posts: postsReducer,
	},
});
const dispatch = store.dispatch;
export { dispatch };
export default store;
