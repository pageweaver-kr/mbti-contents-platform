import React, { useEffect } from 'react';

const AdsenseUnit = ({ slot }) => {
	// slot: '5529976230'
	useEffect(() => {
		if (window) {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}, []);
	return (
		<div>
			<ins
				className='adsbygoogle'
				style={{ display: 'block' }}
				data-ad-client='ca-pub-2055286848335194'
				data-ad-slot={slot}
				data-ad-format='auto'
				data-full-width-responsive='true'
			></ins>
		</div>
	);
};

export default AdsenseUnit;
