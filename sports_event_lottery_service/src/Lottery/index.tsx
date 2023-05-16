import { useState, useEffect } from 'react';
import * as _ from './style';

const getRandomNumber = () => {
	const num1 = String(Math.floor(Math.random() * 3 + 1));
	const num2 = String(Math.floor(Math.random() * 4 + 1));
	const num3 = () => {
		if (num1 === '3') {
			return Array.from(String(Math.floor(Math.random() * 20 + 1)).padStart(2, '0'));
		} else if (num1 === '2') {
			return Array.from(String(Math.floor(Math.random() * 18 + 1)).padStart(2, '0'));
		} else {
			return Array.from(String(Math.floor(Math.random() * 16 + 1)).padStart(2, '0'));
		}
	};
	console.log([num1, num2, ...num3()]);
	return [num1, num2, ...num3()];
};

const Lottery = () => {
	const [studentNumber, setStudentNumber] = useState<string[]>(['0', '0', '0', '0']);
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
		}, 3000);
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
