import React from 'react';
import IntroButtonGroup from './IntroButtonGroup';
import { eventSenderGA } from '../../tools/tools';
import KakaoAdfit from '../KakaoAdfit';
import CoupangDynamicBanner from '../CoupangDynamicBanner';
import AdsenseUnit from '../AdsenseUnit';
import GoToHomeButton from './GoToHomeButton';

function Intro({ info, setMode }) {
	const onImageClick = () => {
		eventSenderGA('Paging', 'Test Start Button', 'Intro');
		setMode('quiz');
	};
	const foreignTextsObject = {
		Kor: {
			startButton: '시작하기',
			comment: '로 여러분의 성향을 테스트해보세요!',
		},
		Eng: {
			startButton: 'START',
			comment: 'to test your personality!',
		},
		JP: {
			startButton: 'START',
			comment: 'to test your personality!',
		},
	};
	return (
		<div>
			<h1>{info?.mainTitle}</h1>
			<h3>{info?.subTitle}</h3>
			<img
				// onClick={() => setMode('quiz')}
				style={{ width: '100%', cursor: 'pointer' }}
				src={info?.mainImage}
				alt={info?.mainTitle}
			/>
			<AdsenseUnit slot={'5529976230'} />
			<KakaoAdfit />
			<CoupangDynamicBanner unit={'introBanner'} />
			<button
				style={{
					backgroundColor: 'brown',
					color: 'white',
					width: '14rem',
					height: '4rem',
					border: 'none',
					borderRadius: '1rem',
					fontSize: '1.5rem',
					fontWeight: 'bold',
					cursor: 'pointer',
				}}
				onClick={onImageClick}
			>
				{info && foreignTextsObject[info.lang].startButton}
			</button>
			<p>
				<span style={{ fontWeight: 'bold', color: 'brown' }}>
					{info?.mainTitle}
				</span>
				{info ** foreignTextsObject[info.lang].comment}
			</p>
			<IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang} />
			<GoToHomeButton page='Intro' />
		</div>
	);
}

export default Intro;
