import React from 'react';
import styles from './affiliateButton.module.css';
import Cookies from 'js-cookie';

export const cookieTime = (1 / 24) * 2;

const AffiliateButton = ({ setIsOpened, lang }) => {
	const onButtonClick = () => {
		setIsOpened(true);
		Cookies.set('affiliate', true, {
			expires: cookieTime,
			secure: true,
		});
	};
	const foreignTextsObject = {
		Kor: '버튼 누르고 결과 보기',
		Eng: 'Click the button to see the result',
		JP: 'Click the button to see the result',
	};
	return (
		<a
			href='https://link.coupang.com/a/cakuHS'
			target='_blank'
			rel='noreferrer noopener'
		>
			{/* 위 주소는 나중에 나의 알리익스프레스 제휴주소로 바꿀 것 */}
			<div className={styles.coverDiv}>
				<button className={styles.coverButton}>
					{lang && foreignTextsObject[lang]}
				</button>
			</div>
		</a>
	);
};

export default AffiliateButton;
