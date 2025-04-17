import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HomeOutlined, LinkOutlined, RedoOutlined } from '@ant-design/icons';
import { base_url } from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';
import { eventSenderGA } from '../../tools/tools';

const ResultButtonGroup = ({ testParam, resultParam, lang }) => {
	const foreignTextsObject = {
		Kor: {
			copyLink: '링크 복사',
			redo: '다시 하기',
			goHome: '다른 테스트 하러가기',
		},
		Eng: {
			copyLink: 'Copy the Link',
			redo: 'Re-DO',
			goHome: 'Go to Other Tests',
		},
		JP: {
			copyLink: 'Copy the Link',
			redo: '다시 하기',
			goHome: '다른 테스트 하러가기',
		},
	};
	const navigate = useNavigate();

	const onClickCopyUrlButton = () => {
		eventSenderGA('Copy', 'Copy Url Button', 'Result');
		alert('URL이 복사되었습니다.');
	};

	const onClickRedoButton = () => {
		eventSenderGA('Paging', 'Copy Re-Do Button', 'Result');
		navigate(`${testParam}`);
	};

	const onClickGoHomeButton = () => {
		eventSenderGA('Paging', 'Copy Go-Home Button', 'Result');
		navigate('/');
	};
	return (
		<div className={styles.mainDiv}>
			<div className={styles.upperDiv}>
				<CopyToClipboard
					text={`${base_url}/${testParam}/result/${resultParam}`}
				>
					<button className={styles.upperButton} onClick={onClickCopyUrlButton}>
						<LinkOutlined />
						&nbsp; {lang && foreignTextsObject[lang].copyLink}
					</button>
				</CopyToClipboard>
				<button className={styles.upperButton} onClick={onClickRedoButton}>
					<RedoOutlined />
					&nbsp; {lang && foreignTextsObject[lang].redo}
				</button>
			</div>
			<div className={styles.bottomDiv}>
				<button className={styles.bottomButton} onClick={onClickGoHomeButton}>
					<HomeOutlined />
					&nbsp; {lang && foreignTextsObject[lang].goHome}
				</button>
			</div>
		</div>
	);
};

export default ResultButtonGroup;
