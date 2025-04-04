import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import TestResult from './page/TestResult';
import { useEffect } from 'react';
import ReactGA4 from 'react-ga4';

export const base_url = 'mbti.jadepost.net'; // 구매한 도매인이 있다면 넣어주세요

function App() {
	useEffect(() => {
		ReactGA4.initialize([
			{
				trackingId: '', // G-S0V61S368S
				gaOptions: {
					siteSpeedSampleRate: 100,
				},
			},
		]);
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				{/* Main Thumbnail List Page */}
				<Route path='/' element={<Main />} />
				{/* Test Intro-Quiz-Loading Page */}
				<Route path=':/testParam' element={<Test />} />
				{/* Test Result Page */}
				<Route
					path='/:testParam/result/:resultParam'
					element={<TestResult />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/testName
// 3. 결과 페이지 : root/:testName/result/resultName
