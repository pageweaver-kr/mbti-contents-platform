import React, { useEffect, useState } from 'react';
import AffiliateButton from './AffiliateButton';
import styles from './affiliateButton.module.css';
import Cookies from 'js-cookie';

const TestResultRenderer = ({ renderResultInfo, lang }) => {
	const foreignTextsObject = {
		Kor: {
			title: '결과는...',
		},
		Eng: {
			title: 'Your result is...',
		},
		JP: {
			title: 'Your result is...',
		},
	};
	const [isOpened, setIsOpened] = useState(false);
	const [affiliateCookie, setAffiliateCookie] = useState(
		Cookies.get('affiliate') // true or undefined
	);
	const [affiliateButtonOpened, setAffiliateButtonOpened] = useState(
		isOpened && affiliateCookie
	);

	useEffect(() => {
		setAffiliateButtonOpened(isOpened || affiliateCookie);
	}, [isOpened, affiliateCookie]);

	useEffect(() => {
		setAffiliateCookie(Cookies.get('affiliate'));
	}, []);

	return (
		<div>
			<h3>{lang && foreignTextsObject[lang].title}</h3>
			<div
				className={styles.resultImageDiv}
				style={{ height: affiliateButtonOpened ? '100%' : '15rem' }}
			></div>
			{/* Button Open Condition */}
			{!affiliateButtonOpened && (
				<AffiliateButton lang={lang} setIsOpened={setIsOpened} />
			)}
		</div>
	);
};

export default TestResultRenderer;
