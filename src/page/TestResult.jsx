import TestResultRenderer from '../components/testResult/TestResultRenderer';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TESTS } from '../data/TESTS';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import GoToHomeButton from '../components/test/GoToHomeButton';

function TestResult() {
	const navigate = useNavigate();
	const { testParam, resultParam } = useParams();
	const [renderResultInfo, setRenderResultInfo] = useState({});
	const [renderTestInfo, setRenderTestInfo] = useState({});
	useEffect(() => {
		const testInfo = TESTS.find((test) => test.info.mainUrl === testParam);
		if (!testInfo) {
			alert('존재하지 않는 테스트입니다!');
			navigate('/');
		}

		const resultInfo = testInfo?.results?.find(
			(result) => result.query === resultParam
		);
		if (!resultInfo) {
			alert('존재하지 않는 결과값입니다!');
			navigate(`/${testInfo?.info?.mainUrl}`);
		}

		setRenderResultInfo(resultInfo);
	}, [testParam, resultParam, navigate]);
	return (
		<div>
			<TestResultRenderer
				lang={renderTestInfo.info?.lang}
				renderResultInfo={renderResultInfo}
			/>
			<ShareButtonGroup
				testParam={testParam}
				resultParam={resultParam}
				renderTestInfo={renderTestInfo}
				lang={renderTestInfo.info?.lang}
			/>
			<Link to={`/blog/${testParam}`}>
				<button
					style={{
						backgroundColor: 'white',
						width: '10rem',
						height: '3rem',
						fontSize: '1.3rem',
						color: 'brown',
						border: '3px solid brown',
						borderRadius: '1rem',
						fontWeight: 'bold',
						cursor: 'pointer',
					}}
				>
					블로그 보러가기
				</button>
			</Link>
			<ResultButtonGroup
				testParam={testParam}
				resultParam={resultParam}
				renderTestInfo={renderTestInfo}
				lang={renderTestInfo.info?.lang}
			/>
			<ResultThumbnailList testParam={testParam} />
			<GoToHomeButton page='Result' />
		</div>
	);
}

export default TestResult;

// 1. Intro -> Quiz -> Loading -> Result
// 2. Direct Access

// /personalColor/result/ISFP
