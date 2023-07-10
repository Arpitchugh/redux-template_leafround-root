// Code for all the increment component
import React from 'react';
import { increment, getPosts } from '../action';
import { useSelector } from 'react-redux';

const Increment = (name, id) => {
	const val = useSelector(state => state.posts.count);
	return (
		<>
			<h2>Hi from increment Component</h2>
			<button onClick={() => increment()}>Increase num</button>
			<button onClick={() => getPosts()}>Fetch posts</button>
			<h3>num: {val}</h3>
			{/* <button onClick={() => getPost()}>Get Post</button> */}
		</>
	);
};

export default Increment;
