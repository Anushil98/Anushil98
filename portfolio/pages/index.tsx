import Head from 'next/head';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    overflow-x:hidden;
	}

	img{
		height:100%;
		width:100%;
		object-fit:cover;
	}
`;

const Header = styled.header`
	width: 100%;
	height: 10% !important;
	max-height: 240px;
	background-color: #3b3636;
	position: absolute;
	z-index: 9999999;
`;
const Page1 = styled.div`
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
	justify-content: center;
	font-family: cursive;
	font-size: 10.5vw;
`;

const Brief = styled.div`
	display: flex;
	height: fit-content;
	flex-direction: row;
	justify-content: center;
	font-family: monospace;
	font-size: 4.3vw;

	&::before {
		content: ",,";
		transform: rotateY(180deg);
		position: relative;
		top: -24px;
	}

	&::after {
		content: ',,';
		position: relative;
		top: -24px;
	}
`;

const ExperienceIn = styled.div`
	height: fit-content;
	width: 100%;
	display: grid;
	grid-template-columns: 0.5fr 2fr;
`;

const Languages = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-size: 5.2vw;
	font-family: cursive;
	/* position: absolute; */
	/* bottom: 0; */
`;

const UniqueTech = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	/* margin: 0 10vw; */
`;

const TechIcon =
	styled.div <
	{ grayscale: boolean } >
	`
	filter: ${(props) => {
		return props.grayscale ? 'grayscale(100%)' : 'grayscale(0%)';
	}} `;

const CodeSnippet =
	styled.div <
	{ bgColor: string } >
	`background-color: ${(props) => {
		return '#' + props.bgColor;
	}} `;

const UniqueTechStacks = [
	{ name: 'typescript', color: '007ACC' },
	{ name: 'javascript', color: 'F7DF1E' },
	{ name: 'python', color: '14354C' },
	{ name: 'typescript', color: '007ACC' }
];

export default function Home() {
	const [ currentTech, setcurrentTech ] = useState(0);

	return (
		<div>
			<Head>
				<title>Anushil</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Page1>
				<Name>{'<Anushil/>'}</Name>
				<Brief>{'Secure, Scalable And Ethical Code'}</Brief>
			</Page1>
			<Page1>
				<Languages>{'<Lanuguages/>'}</Languages>
				<ExperienceIn>
					<UniqueTech>
						{UniqueTechStacks.map((uniq, index) => {
							return (
								<TechIcon
									key={index}
									onClick={() => {
										setcurrentTech(index);
									}}
									grayscale={currentTech === index ? false : true}
								>
									<img src={`/TechIcon/${uniq.name}.svg`} />
								</TechIcon>
							);
						})}
					</UniqueTech>

					<CodeSnippet bgColor={UniqueTechStacks[currentTech].color}>
						<img src={`/LanguageCodeSnippets/${UniqueTechStacks[currentTech].name}.svg`} />
					</CodeSnippet>
				</ExperienceIn>
			</Page1>
		</div>
	);
}
