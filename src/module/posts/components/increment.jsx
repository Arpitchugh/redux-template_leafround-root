// Code for all the increment component
import React from 'react';
import { increment, getPosts } from '../action';
import { useSelector } from 'react-redux';

const Increment = (name, id) => {
	const val = useSelector(state => state.posts.count);
	return (
		<>
			<button onClick={() => increment()} style={{margin: '2em 1em 0 0'}}>
				Increase num
			</button>
			<button onClick={() => getPosts()}>Fetch posts</button>
			<h3>num: {val}</h3>
			{/* <button onClick={() => getPost()}>Get Post</button> */}
		</>
	);
};

export default Increment;
