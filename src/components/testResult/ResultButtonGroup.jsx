import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HomeOutlined, LinkOutlined, RedoOutlined } from '@ant-design/icons';
import { base_url } from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';
import { eventSenderGA } from '../../tools/tools';

const ResultButtonGroup = ({ testParam, resultParam }) => {
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
						&nbsp; 링크복사
					</button>
				</CopyToClipboard>
				<button className={styles.upperButton} onClick={onClickRedoButton}>
					<RedoOutlined />
					&nbsp; 다시하기
				</button>
			</div>
			<div className={styles.bottomDiv}>
				<button className={styles.bottomButton} onClick={onClickGoHomeButton}>
					<HomeOutlined />
					&nbsp; 다른테스트 하러가기
				</button>
			</div>
		</div>
	);
};

export default ResultButtonGroup;
