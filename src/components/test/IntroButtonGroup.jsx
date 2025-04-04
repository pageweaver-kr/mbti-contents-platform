import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { base_url } from '../../App';
import { LinkOutlined, HomeOutlined } from '@ant-design/icons';
import { eventSenderGA } from '../../tools/tools';
import { useNavigate } from 'react-router-dom';
import styles from './introButtonGroup.module.css';

const IntroButtonGroup = ({ testParam }) => {
	const navigate = useNavigate();
	const onClickCopyUrlButton = () => {
		alert('링크가 복사되었습니다');
		eventSenderGA('Copy', 'Copy Url Button', 'Intro');
	};

	const onClickGoHomeButton = () => {
		navigate('/');
	};
	return (
		<div>
			<div>
				<CopyToClipboard text={`${base_url}/${testParam}`}>
					<button className={styles.upperButton} onClick={onClickCopyUrlButton}>
						<LinkOutlined />
						&nbsp; 링크복사
					</button>
				</CopyToClipboard>
			</div>
			<div>
				<button className={styles.bottomButton} onClick={onClickGoHomeButton}>
					<HomeOutlined />
					&nbsp; 다른테스트 하러가기
				</button>
			</div>
		</div>
	);
};

export default IntroButtonGroup;
