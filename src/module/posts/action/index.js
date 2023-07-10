import {
	setPostLLoadingTrue,
	setPostLLoaded,
	setPostLLoadingFalse,
	increaseIncrement,
} from '../reducer/posts';
import store from '../../../store/store';
import axios from 'axios';
import { dispatch } from '../../../store/store';

export const getPosts = async () => {
	// call the api and dispatch the actions
	console.log('getPosts');
	dispatch(setPostLLoadingTrue());
	const posts = await axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			console.log(res.data);
			return res.data;
		});

	if (posts.length > 0) {
		dispatch(setPostLLoadingFalse());
		dispatch(setPostLLoaded(posts));
	}
};

export const increment = val => {
	store.dispatch(increaseIncrement(val));
};

/* 
storeConnector(store)
    store; 

    return store =>{

    }
*/
