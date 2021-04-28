import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import ZoomCard from './ZoomCard';

const SubSection = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const SubHeading = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 5.2vw;
	font-family: cursive;
	height: fit-content;
	margin-bottom: 15px;
`;

const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	width: 80vw;
`;

const CardWrapperLevel1 = styled.div`
	display: flex;

	flex-direction: row;
	justify-content: flex-start;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-behavior: smooth;

	white-space: nowrap;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Card =
	styled.div <
	{ grayscale: boolean } >
	`
	display:inline-block;
	width:18vw;
	height:	18vw;
	filter: ${(props) => {
		return props.grayscale ? 'grayscale(100%)' : 'grayscale(0%)';
	}} `;

const SubCard =
	styled.div <
	{ bgColor: string, numElements: number } >
	`background-color: ${(props) => {
		return '#' + props.bgColor;
	}};
	
	width:${(props) => {
		return 100 + '%';
	}};
	height:auto;
	 `;
const Scrollable = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

const LeftArrow = styled.a`
	position: absolute;
	width: 100px;
	height: inherit;
	left: 0;
	z-index: 2;
	backdrop-filter: blur(7px);
`;
const RightArrow = styled.a`
	position: absolute;
	width: 100px;
	height: inherit;
	right: 0;
	z-index: 2;
	backdrop-filter: blur(7px);
`;

export default function Section2(props: { isMobile?: boolean }) {
	const projects: {
		liveState: boolean;
		Name: string;
		languages: string[];
		techStacks: string[];
		liveUrl?: string;
		codeUrl: string;
		imageUrl?: string;
		gifUrl?: string;
	}[] = [
		{
			liveState: true,
			Name: 'Socio',
			liveUrl: 'https://socio-next-js.vercel.app/',
			codeUrl: 'https://github.com/Anushil98/SOCIO-NextJs',
			languages: [ 'typescript', 'javascript', 'html', 'css' ],
			techStacks: [ 'NextJs', 'ReactJs', 'html', 'css' ],
			imageUrl: '/projects/projectLogo/socio.svg',
			gifUrl: null
		},
		{
			liveState: true,
			Name: 'Socio',
			liveUrl: 'https://socio-next-js.vercel.app/',
			codeUrl: 'https://github.com/Anushil98/SOCIO-NextJs',
			languages: [ 'typescript', 'javascript', 'html', 'css' ],
			techStacks: [ 'NextJs', 'ReactJs', 'html', 'css' ],
			imageUrl: '/projects/projectLogo/socio.svg',
			gifUrl: null
		},
		{
			liveState: true,
			Name: 'Socio',
			liveUrl: 'https://socio-next-js.vercel.app/',
			codeUrl: 'https://github.com/Anushil98/SOCIO-NextJs',
			languages: [ 'typescript', 'javascript', 'html', 'css' ],
			techStacks: [ 'NextJs', 'ReactJs', 'html', 'css' ],
			imageUrl: '/projects/projectLogo/socio.svg',
			gifUrl: null
		}
	];
	const uniqueId = v4();
	return (
		<div style={{ height: 'fit-content' }}>
			<SubHeading>{'<Projects/>'}</SubHeading>
			<SubSection>
				<CardWrapper>
					<Scrollable>
						<CardWrapperLevel1>
							{projects.map((proj, index) => {
								return <ZoomCard data={proj} key={index} index={index} />;
							})}
						</CardWrapperLevel1>
					</Scrollable>
				</CardWrapper>
			</SubSection>
		</div>
	);
}
