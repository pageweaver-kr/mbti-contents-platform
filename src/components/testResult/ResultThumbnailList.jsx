import React, { useState } from 'react';
import { TESTS } from '../../data/TESTS';
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import AdsenseUnit from '../AdsenseUnit';

const ResultThumbnailList = ({ testParam }) => {
	const [testList, setTestList] = useState(TESTS);
	return (
		<div>
			{testList
				.filter((test) => test?.info?.mainUrl !== testParam)
				.map((item, idx) => (
					<div key={`/${item?.info?.category.mainUrl}`}>
						<Link to={`/${item?.info?.category.mainUrl}`}>
							<img
								style={{ width: '100%' }}
								src={item?.info?.thumbImage}
								alt={item?.info?.mainTitle}
							/>
						</Link>
						{idx % 2 === 0 && <CoupangDynamicBanner unit={'resultBanner'} />}
						{idx % 2 === 0 && <AdsenseUnit slot={'1590731222'} />}
					</div>
				))}
		</div>
	);
};

export default ResultThumbnailList;
