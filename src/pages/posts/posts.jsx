// import all the components we need from the respective module.
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Index from '../../module/posts/index';

const Posts = () => {
	return (
		<>
			<h1>hi from pages folder</h1>
			{/* Imported Components here */}
			<Index />
		</>
	);
};

export default Posts;
