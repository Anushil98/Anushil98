import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const Main = styled.div`
	display: grid;
	grid-template-rows: repeat(4, 100vh);
	padding: 0 10vw;
`;

const Header = styled.header`
	width: 100%;
	height: 10% !important;
	max-height: 240px;
	background-color: #3b3636;
	position: absolute;
	z-index: 9999999;
`;
const Page1 = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const Name = styled.div`
	width: 100%;
	height: fit-content;
	position: relative;
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	font-family: cursive;
	font-size: 10.5vw;
`;

const Brief = styled.div`
	display: flex;
	height: fit-content;
	flex-direction: row;
	justify-content: flex-start;
	font-family: monospace;
	font-size: 4.3vw;
`;

export default function Home() {
	return (
		<Main>
			<Head>
				<title>Anushil</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}
			<Page1>
				<Name>{'<Anushil/>'}</Name>
				<Brief>{'Secure, Scalable And Ethical Code'}</Brief>
			</Page1>
			<Page1>
				<Section />
			</Page1>
		</Main>
	);
}
