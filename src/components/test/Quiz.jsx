import { useEffect, useState } from 'react';
import styles from './quiz.module.css';
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

function Quiz({ setMode, questions, mbtiScore, setMbtiScore }) {
	const [questionNum, setQuestionNum] = useState(0);
	const onOptionClick = (type) => {
		// mbtiScore update
		// mbtiScore[type] = mbtiScore[type] + 1;
		mbtiScore[type] += 1;
		setMbtiScore({ ...mbtiScore });
		setQuestionNum((prev) => prev + 1);
	};

	useEffect(() => {
		if (questionNum === questions.length) {
			setMode('loading');
		}
		console.log('questionNum', questionNum);
	}, [questionNum, questions.length, setMode]);

	return (
		<div>
			<h3 className={styles.questionText}>
				{questions[questionNum]?.question}
			</h3>
			{questions[questionNum]?.answers &&
				arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
					<button
						className={styles.optionButton}
						onClick={() => onOptionClick(option.type)}
						key={option.content}
					>
						{option.content}
					</button>
				))}
			<Progress
				percent={(questionNum / questions.length) * 100}
				showInfo={false}
			/>
			<h4>
				{questionNum} / {questions.length}
			</h4>
		</div>
	);
}

export default Quiz;

// 16 Results
// 12(4 x 3) Questions - Options selection ex.ENFP
// E:0 / I:0 / ... / J:0 / P:0
// MBTI Calcul

// 12 end -> loading.

// CSS
// Progress Bar
// shuffling answer options
