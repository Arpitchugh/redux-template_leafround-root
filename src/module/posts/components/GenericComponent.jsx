import React from 'react';

import { Card, CardHeader, CardContent, Typography } from '@mui/material';

const GenericComponent = ({
	Logo,
	logoStyle,
	settlementLink,
	title,
	price,
}) => {
	return (
		<Card
			style={{
				backgroundColor: 'white',
				maxWidth: '500px',
				margin: '1em 0',
				padding: '1em',
				borderRadius: '10px',
				boxShadow: '0 0 10px rgba(0,0,0,0.2)',
			}}
		>
			<CardHeader
				title={
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent:
								'space-between',
						}}
					>
						<Logo />
						{settlementLink && (
							<Typography
								variant='h6'
								component='div'
								sx={{
									color: 'green',
								}}
							>
								{settlementLink}
							</Typography>
						)}
					</div>
				}
			/>
			<CardContent
				style={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'left',
				}}
			>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Typography
					variant='body1'
					color='textSecondary'
				>
					{price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default GenericComponent;
