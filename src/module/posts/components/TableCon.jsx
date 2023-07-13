// Counter.js
import React from 'react';
import {
	Box,
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from '@mui/material';
import { useSelector } from 'react-redux';
// import GenericTable from './GenericTable';

const TableCon = ({ posts, color }) => {
	const loading = useSelector(state => state.posts.loading);
	// <GenericTable />;
	return (
		<Box>
			<h2>Hi from table component</h2>
			{loading === true ? (
				<CircularProgress /> // Show a loading indicator while fetching data
			) : (
				<TableContainer>
					<Table>
						<TableBody>
							{posts.map(post => (
								<TableRow
									key={
										post.id
									}
								>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.id
										}
									</TableCell>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.title
										}
									</TableCell>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.body
										}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Box>
	);
};

export default TableCon;
