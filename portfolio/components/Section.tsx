import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

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
	overscroll-behavior: contain;
`;

const CardWrapperLevel1 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	overflow-x: scroll;
	overflow-y: hidden;
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
	height:	18vh;
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

export default function Section() {
	const [ currentTech, setcurrentTech ] = useState(0);

	const UniqueTechStacks = [
		{ name: 'typescript', color: '007ACC' },
		{ name: 'javascript', color: 'F7DF1E' },
		{ name: 'python', color: '14354C' },
		{ name: 'java', color: 'ED8B00' },
		{ name: 'python', color: '14354C' }
	];
	return (
		<div style={{ height: 'fit-content' }}>
			<SubHeading>{'<Lanuguages/>'}</SubHeading>
			<SubSection
				style={{
					backgroundColor: currentTech >= 0 ? '#' + UniqueTechStacks[currentTech].color : '#ffffff'
				}}
			>
				<motion.div
					onHoverEnd={() => {
						setcurrentTech(-1);
					}}
				>
					<CardWrapper>
						<CardWrapperLevel1>
							{UniqueTechStacks.map((uniq, index) => {
								return (
									<motion.div
										onHoverStart={() => {
											setcurrentTech(index);
										}}
										key={index}
										style={{ width: 'fit-content' }}
									>
										<Card
											onClick={(e) => {
												if (currentTech === -1 || currentTech !== index) setcurrentTech(index);
												else setcurrentTech(-1);
											}}
											grayscale={currentTech === index ? false : true}
										>
											<img src={`/TechIcon/${uniq.name}.svg`} />
										</Card>
									</motion.div>
								);
							})}
						</CardWrapperLevel1>

						<AnimatePresence>
							<motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5 }}>
								{currentTech >= 0 ? (
									<SubCard
										bgColor={UniqueTechStacks[currentTech].color}
										numElements={UniqueTechStacks.length}
									>
										<img src={`/LanguageCodeSnippets/${UniqueTechStacks[currentTech].name}.svg`} />
									</SubCard>
								) : null}
							</motion.div>
						</AnimatePresence>
					</CardWrapper>
				</motion.div>
			</SubSection>
		</div>
	);
}
