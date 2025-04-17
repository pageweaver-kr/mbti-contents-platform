import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { eventSenderGA } from '../../tools/tools';

const GoToHomeButton = ({ page }) => {
	const onClickGoHomeButton = () => {
		eventSenderGA('Click', 'Go Home Floating Button', page);
	};
	return (
		<div
			style={{
				position: 'fixed',
				bottom: '30px',
				left: '20px',
				fontSize: '2rem',
				border: '1px solid brown',
				borderRadius: '100%',
				width: '3.5rem',
				height: '3.5rem',
				cursor: 'pointer',
			}}
		>
			<a href='/'>
				<HomeOutlined style={{ color: 'brown', verticalAlign: '-0.78rem' }} />
			</a>
		</div>
	);
};

export default GoToHomeButton;
