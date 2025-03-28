import { CircleFlag } from 'react-circle-flags';
import { useNavigate } from 'react-router-dom';
import styles from './languageIcons.module.css';

function LanguageIcons() {
	const navigate = useNavigate();

	const onButtonClick = (lang) => {
		navigate(`/?lang=${lang}`);
	};
	return (
		<div>
			<CircleFlag
				className={styles.flagIcon}
				onClick={() => onButtonClick('Kor')}
				countryCode='kr'
				width={48}
			/>
			<CircleFlag
				className={styles.flagIcon}
				onClick={() => onButtonClick('Eng')}
				countryCode='us'
				width={48}
			/>
			<CircleFlag
				className={styles.flagIcon}
				onClick={() => onButtonClick('JP')}
				countryCode='jp'
				width={48}
			/>
		</div>
	);
}

export default LanguageIcons;
