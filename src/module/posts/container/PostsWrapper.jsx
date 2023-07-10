// PostsWrapper.js
import React from 'react';

import Increment from '../components/increment';
import { useSelector } from 'react-redux';
import TableCon from '../components/TableCon';

const PostsWrapper = () => {
	// import/call components here
	// getPost();
	const posts = useSelector(state => state.posts.posts);
	return (
		<>
			<h2>Hi from PostsWrapper in container</h2>
			<Increment />
			<TableCon color={'white'} posts={posts} />
		</>
	);
};

export default PostsWrapper;
