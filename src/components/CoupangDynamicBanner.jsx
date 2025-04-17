import React from 'react';

const CoupangDynamicBanner = ({ unit }) => {
	const unitMapper = {
		introBanner: {
			src: '',
			width: '',
			height: '',
		},
		resultBanner: {
			src: '',
			width: '',
			height: '',
		},
	};
	return (
		<div>
			<iframe
				src={unitMapper[unit].src}
				width={unitMapper[unit].width}
				height={unitMapper[unit].height}
				referrerPolicy='unsafe-url'
			></iframe>
		</div>
	);
};

export default CoupangDynamicBanner;
