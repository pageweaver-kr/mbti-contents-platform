import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading-animation.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading(mbtiScore, currentTest) {
	const navigate = useNavigate();
	const [finalQuery, setFinalQuery] = useState('');
	const defaultOption = {
		loop: true,
		autoplay: true,
		animationData: animationData.default,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	// loadingTime -> 3.7초
	const loadingTime = 3700;
	useEffect(() => {
		// 4개의 슬롯 Array [[E,I], [N,S], [T,F], [J,P]]
		const mbtiPairs = [
			['E', 'I'],
			['N', 'S'],
			['T', 'F'],
			['J', 'P'],
		];
		// 비어있는 문자열 변수
		let resultType = '';
		// Array 순회 -> 각 슬롯의 winner 선정 -> 문자열 변수에 추가
		for (let pair of mbtiPairs) {
			let firstType = pair[0];
			let secondType = pair[1];
			let firstTypeScore = mbtiScore[firstType];
			let secondTypeScore = mbtiScore[secondType];
			firstTypeScore > secondTypeScore
				? (resultType += firstType)
				: (resultType += secondType);
		}

		const resultQuery = currentTest?.results?.find(
			(result) => result?.type === resultType
		)?.query;
		setFinalQuery(resultQuery);
	}, [mbtiScore, currentTest]);

	useEffect(() => {
		let timeout = setTimeout(() => {
			// resultQuery 활용해서 결과 페이지로 라우팅하기
			finalQuery &&
				navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
		}, loadingTime);
		return () => {
			clearTimeout(timeout);
		};
	}, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);

	return (
		<Lottie
			options={defaultOption}
			height={250}
			width={250}
			style={{ marginTop: '10rem' }}
		/>
	);
}

export default Loading;

// Loading Animation
// mbtiScore Calcul -> Result MBTI Type ex. "ENFP"
// N초 -> Result Page Routing
// base_url/personalColor/result/:resultParam
