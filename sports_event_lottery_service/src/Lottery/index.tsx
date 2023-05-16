import { useState, useEffect } from 'react';
import * as _ from './style';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();

const getRandomNumber = () => {
	const num1 = String(Math.floor(Math.random() * 3 + 1));
	const num2 = String(Math.floor(Math.random() * 4 + 1));
	const num3 = () => {
		if (num1 === '3') {
			if (num2 === '1') {
				return Array.from(String(Math.floor(Math.random() * 20 + 1)).padStart(2, '0'));
			} else if (num2 === '3') {
				return Array.from(String(Math.floor(Math.random() * 17 + 1)).padStart(2, '0'));
			} else {
				return Array.from(String(Math.floor(Math.random() * 19 + 1)).padStart(2, '0'));
			}
		} else if (num1 === '2') {
			if (num2 === '3') {
				return Array.from(String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0'));
			} else {
				return Array.from(String(Math.floor(Math.random() * 18 + 1)).padStart(2, '0'));
			}
		} else {
			return Array.from(String(Math.floor(Math.random() * 16 + 1)).padStart(2, '0'));
		}
	};
	return [num1, num2, ...num3()];
};

const Lottery = () => {
	const [studentNumber, setStudentNumber] = useState<string[]>(['0', '0', '0', '0']);
	const [history, setHistory] = useState<string[]>(cookie.get('history') || []);
	const [reversedHistory, setReversedHistory] = useState<string[]>([]); // New state for reversed history
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
		}, 2000);
	};

	useEffect(() => {
		if (isStopped && studentNumber.join('') !== '0000') {
			setHistory((prevHistory) => [...prevHistory, studentNumber.join('')]);
		}
	}, [isStopped, studentNumber]);

	useEffect(() => {
		cookie.set('history', history);
		setReversedHistory(history.slice().reverse()); // Update the reversed history array
	}, [history]);

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
			<_.HistoryWrapper>
				{reversedHistory.map((res, i) => (
					<_.History key={i}>{res}</_.History>
				))}
			</_.HistoryWrapper>
		</_.Container>
	);
};

export default Lottery;
