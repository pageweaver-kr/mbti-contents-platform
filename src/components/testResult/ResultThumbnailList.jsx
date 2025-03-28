import React, { useState } from 'react';
import { TESTS } from '../../data/TESTS';

const ResultThumbnailList = ({ testParam }) => {
	const [testList, setTestList] = useState(TESTS);
	return (
		<div>
			{testList
				.filter((test) => test?.info?.mainUrl !== testParam)
				.map((item) => (
					<Link
						to={`/${item?.info?.category.mainUrl}`}
						key={`/${item?.info?.category.mainUrl}`}
					>
						<img
							style={{ width: '100%' }}
							src={item?.info?.thumbImage}
							alt={item?.info?.mainTitle}
						/>
					</Link>
				))}
		</div>
	);
};

export default ResultThumbnailList;
