import React from 'react';
import {
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

const GenericTable = ({ header = null, body = null }) => {
	const updateHeader = [header[0], header[1]];
	header = header.slice(2, header.length);
	return (
		<Table>
			{header ? (
				<TableHead>
					<TableRow>
						<TableCell
							style={{
								display: 'flex',
								flexDirection:
									'column',
							}}
						>
							<span>
								{
									updateHeader[0]
								}
							</span>
							<span
								style={{
									color: 'purple',
								}}
							>
								{
									updateHeader[1]
								}
							</span>
						</TableCell>
						{header.map(
							(element, index) => (
								<TableCell
									key={
										index
									}
								>
									{
										element
									}
								</TableCell>
							)
						)}
					</TableRow>
				</TableHead>
			) : (
				console.log('no header')
			)}
			{body.length ? (
				<TableBody>
					{body.map(post => {
						const {
							id,
							userId,
							...postWithoutIds
						} = post; // Exclude id and userId from the post object
						return (
							<TableRow key={post.id}>
								<TableCell
									style={{
										display: 'flex',
										flexDirection:
											'column',
									}}
								>
									<span>
										{
											id
										}
									</span>
									<span
										style={{
											color: 'purple',
										}}
									>
										{
											userId
										}
									</span>
								</TableCell>
								{Object.entries(
									postWithoutIds
								).map(
									([
										key,
										value,
									]) => (
										<TableCell
											key={
												key
											}
										>
											{
												value
											}
										</TableCell>
									)
								)}
							</TableRow>
						);
					})}
				</TableBody>
			) : (
				<CircularProgress />
			)}
		</Table>
	);
};

export default GenericTable;
