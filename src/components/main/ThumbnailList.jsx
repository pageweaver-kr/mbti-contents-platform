import { useEffect, useState } from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import { FloatButton } from 'antd';
import { eventSenderGA } from '../../tools/tools';

function ThumbnailList() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [testList, setTestList] = useState(TESTS);

	useEffect(() => {
		const currentLanguage = searchParams.get('lang') || 'Kor';
		const currentCategory = searchParams.get('cat');
		if (currentCategory) {
			const filteredTests = TESTS.filter(
				(test) =>
					test?.info?.lang === currentLanguage &&
					test?.info?.category === currentCategory
			);
			setTestList(filteredTests);
		} else {
			const filteredTests = TESTS.filter(
				(test) => test?.info?.lang === currentLanguage
			);
			setTestList(filteredTests);
		}
		// setTestList()
	}, [searchParams]);

	const onBackToTopButtonClick = () => {
		eventSenderGA('BackTpTop', 'BackToTopButton', 'MainPage');
	};

	return (
		<div>
			{/* 이 이미지를 누르면 해당 테스트 Intro 페이지로 넘어가기 */}
			{testList ? (
				testList.map((test) => (
					<Link to={`/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
						<img
							style={{ width: '100%' }}
							src={test?.info?.thumbImage}
							alt={test?.info?.mainUrl}
						/>
					</Link>
				))
			) : (
				<Skeleton active style={{ height: '20rem' }} />
			)}
			<FloatButton.BackTop
				visibilityHeight={400}
				onClick={onBackToTopButtonClick}
			/>
		</div>
	);
}

export default ThumbnailList;
