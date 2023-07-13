// PostsWrapper.js
import React from 'react';

import Increment from '../components/increment';
import { useSelector } from 'react-redux';
import TableCon from '../components/TableCon';
import GenericTable from '../components/GenericTable';
import GenericComponent from '../components/GenericComponent';
import AccessibleForwardRoundedIcon from '@mui/icons-material/AccessibleForwardRounded';

const header = ['userId', 'id', 'title', 'body'];
const logoStyle = {
	width: '50px',
	height: '50px',
	borderRadius: '50%',
};
const Logo = AccessibleForwardRoundedIcon;

const PostsWrapper = () => {
	// import/call components here
	// getPost();
	const posts = useSelector(state => state.posts.posts);
	return (
		<>
			<GenericComponent
				Logo={Logo}
				logoStyle={logoStyle}
				title={'thread'}
				settlementLink={'hi ->'}
				price={'£100'}
			/>
			<GenericComponent
				Logo={Logo}
				logoStyle={logoStyle}
				title={'ig'}
				price={'£10,000'}
			/>
			<Increment />
			{/* <TableCon color={'white'} posts={posts} /> */}
			<GenericTable body={posts} header={header} />
		</>
	);
};

export default PostsWrapper;
