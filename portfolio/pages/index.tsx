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
	display: flex;
	flex-direction: column;
`;

const Languages = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 5.2vw;
	font-family: cursive;
`;

const UniqueTech = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	/* margin: 0 10vw; */
`;

const TechIcon = styled.div``;

const CodeSnippet = styled.div``;

const UniqueTechStacks = [
	{ name: 'typescript' },
	{ name: 'typescript' },
	{ name: 'typescript' },
	{ name: 'typescript' }
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
			<Name>{'<Anushil/>'}</Name>
			<Brief>{'Secure, Scalable And Ethical Code'}</Brief>
			<ExperienceIn>
				<Languages>{'Lanuguages'}</Languages>
				<UniqueTech>
					{UniqueTechStacks.map((uniq, index) => {
						return (
							<TechIcon key={index}>
								<img src={`/TechIcon/${uniq.name}.svg`} />
							</TechIcon>
						);
					})}
				</UniqueTech>

				<CodeSnippet>
					<img src={`/LanguageCodeSnippets/${UniqueTechStacks[currentTech].name}.svg`} />
				</CodeSnippet>
			</ExperienceIn>
		</div>
	);
}
