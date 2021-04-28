import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Section2 from '../components/Section2';
import { getMobileDetect } from '../utils/getDeviceInfo';

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
const Page2 = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
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

export default function Home(props: { isMobile: boolean }) {
	return (
		<Main>
			<Head>
				<title>Anushil</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}
			<Page1 id="page1">
				<Name>{'<Anushil/>'}</Name>
				<Brief>{'Secure, Scalable And Ethical Code'}</Brief>
			</Page1>
			<Page2 id="page2">
				<Section isMobile={props.isMobile} />
				<Section2 isMobile={props.isMobile} />
			</Page2>
		</Main>
	);
}

export async function getServerSideProps({ req }) {
	const getDeviceInformation = getMobileDetect(req.headers['user-agent']);

	return {
		props: {
			isMobile: getDeviceInformation.isMobile()
		}
	};
}
