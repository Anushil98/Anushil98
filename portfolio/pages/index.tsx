import Head from 'next/head';
import styled from 'styled-components';
const Header = styled.header`
	width: 100%;
	height: 10% !important;
	max-height: 240px;
	background-color: #3b3636;
`;

const Name = styled.div`
	width: 100%;
	height: 40%;
	position: fixed;
	top: 20%;
	display: flex;
	align-items: baseline;
	justify-content: center;
	font-family: cursive;
	font-size: 10.5vw;
`;

const Brief = styled.div``;

export default function Home() {
	return (
		<div>
			<Head>
				<title>Anushil</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Name>{'<Anushil/>'}</Name>
		</div>
	);
}
