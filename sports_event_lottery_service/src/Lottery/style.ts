import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const Number = styled.div`
	border: 2px solid black;
	border-radius: 10px;
	width: 165px;
	height: 150px;
	display: flex;
	justify-content: center;
	padding-bottom: 15px;
	font-size: 157px;
	font-weight: bold;
`;

export const Button = styled.button`
	margin-top: 25px;
	padding: 10px 20px;
	font-size: 20px;
	border-radius: 5px;
	border: 1.5px solid black;
	&:disabled {
		border: 1.5px solid rgba(178, 178, 178, 1);
	}
`;

export const HistoryWrapper = styled.div`
	border: 2px solid black;
	margin-top: 40px;
	border-radius: 10px;
	width: 200px;
	height: 200px;
	padding: 10px;
	gap: 10px;
	overflow: scroll;
`

export const History = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`