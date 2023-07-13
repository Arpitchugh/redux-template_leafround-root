// bring content from the container, component, action and reducer here and export it as a single object.
// eg: export { default as WowContainer } from './WowContainer';

import React from 'react';
import PostsWrapper from './container/PostsWrapper';
const index = () => {
	return (
		<>
			<PostsWrapper />
		</>
	);
};

export default index;
