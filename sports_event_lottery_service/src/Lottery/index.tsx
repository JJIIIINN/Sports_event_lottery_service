import { useState, useEffect } from 'react';
import * as _ from './style';

const getRandomNumber = () => {
	const num1 = Math.floor(Math.random() * 3 + 1);
	const num2 = Math.floor(Math.random() * 4 + 1);
	const num3 = num1 === 3 ? Math.floor(Math.random() * 2 + 1) : Math.floor(Math.random() * 1);
	const num4 = () => {
		if (num1 === 3) {
			if (num3 === 2) {
				return 0;
			} else if (num3 === 1) {
				return Math.floor(Math.random() * 9);
			} else {
				return Math.floor(Math.random() * 8 + 1);
			}
		} else if (num1 === 2) {
			if (num3 === 1) {
				return Math.floor(Math.random() * 8);
			} else {
				return Math.floor(Math.random() * 9 + 1);
			}
		} else {
			if (num3 === 1) {
				return Math.floor(Math.random() * 6);
			} else {
				return Math.floor(Math.random() * 9 + 1);
			}
		}
	};

	return [num1, num2, num3, num4()];
};

const Lottery = () => {
	const [studentNumber, setStudentNumber] = useState<number[]>([0, 0, 0, 0]);
	const [isStopped, setIsStopped] = useState<boolean>(true);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (!isStopped) {
			intervalId = setInterval(() => {
				setStudentNumber(getRandomNumber());
			}, 50);
		}

		return () => clearInterval(intervalId);
	}, [isStopped]);

	const start = () => {
		setIsStopped(false);
		setTimeout(() => {
			setIsStopped(true);
		}, 800);
	};

	return (
		<_.Container>
			<_.Wrapper>
				{studentNumber.map((number, index) => (
					<_.Number key={index}>{number}</_.Number>
				))}
			</_.Wrapper>
			<_.Button onClick={start} disabled={!isStopped}>
				{isStopped ? '추첨' : '추첨중...'}
			</_.Button>
		</_.Container>
	);
};

export default Lottery;
