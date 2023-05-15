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
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
`;
