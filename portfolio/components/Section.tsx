import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

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
	justify-content: space-between;
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
	{ grayscale: boolean, backgroundImage: string } >
	`
	display:inline-block;
	width:10vw;
	height:	10vw;
	background-image:${(props) => {
		return `url('${props.backgroundImage}')`;
	}};
	background-repeat:no-repeat;
	background-size:cover;
	border-radius: 20%;
    margin-right: 10px;
    box-shadow: inset -7px -7px 7px 0px #bcb9b9;
	filter: ${(props) => {
		return props.grayscale ? 'grayscale(100%)' : 'grayscale(0%)';
	}} `;

const SubCard =
	styled.div <
	{ bgColor: string, numElements: number } >
	`background-color: ${(props) => {
		return '#' + props.bgColor;
	}};
	border-radius: 4%;
    box-shadow: inset 0px 8px 7px 0px #bcb9b9;
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

export default function Section(props: { isMobile?: boolean }) {
	const [ currentTech, setcurrentTech ] = useState(props.isMobile ? 0 : -1);

	const UniqueTechStacks = [
		{ name: 'typescript', color: '007ACC' },
		{ name: 'javascript', color: 'F7DF1E' },
		{ name: 'html', color: 'E34F26' },
		{ name: 'css3', color: '1572B6' },
		{ name: 'python', color: '14354C' },
		{ name: 'java', color: 'ED8B00' },
		{ name: 'C', color: '00599C' }
	];
	const uniqueId = v4();
	return (
		<div style={{ height: 'fit-content' }}>
			<SubHeading>{'<Lanuguages/>'}</SubHeading>
			<SubSection>
				<motion.div
					onHoverEnd={() => {
						setcurrentTech(-1);
					}}
				>
					<CardWrapper>
						<Scrollable>
							{/* <LeftArrow href={'#' + uniqueId + 'techStack' + 0}>
								<img src="/prev.svg" />
							</LeftArrow> */}

							<CardWrapperLevel1>
								{UniqueTechStacks.map((uniq, index) => {
									return (
										<motion.div
											onHoverStart={() => {
												setcurrentTech(index);
											}}
											key={index}
											// id={uniqueId + 'techStack' + index.toString()}
											style={{ width: 'fit-content' }}
										>
											<Card
												onClick={(e) => {
													if (currentTech === -1 || currentTech !== index)
														setcurrentTech(index);
													else setcurrentTech(-1);
												}}
												grayscale={currentTech === index ? false : true}
												backgroundImage={`/TechIcon/${uniq.name}.svg`}
											/>
										</motion.div>
									);
								})}
							</CardWrapperLevel1>

							{/* <RightArrow href={'#' + uniqueId + 'techStack' + (UniqueTechStacks.length - 1)}>
								<img src="/next.svg" />
							</RightArrow> */}
						</Scrollable>

						<AnimatePresence>
							{currentTech >= 0 ? (
								<motion.div
									initial={{ transformOrigin: 'left top', transform: 'scaleY(0)' }}
									transition={{ type: 'keyframes', duration: 0.5 }}
									animate={{ transform: 'scaleY(1)' }}
									exit={{ transformOrigin: 'left top', transform: 'scaleY(0)' }}
								>
									<SubCard
										bgColor={UniqueTechStacks[currentTech].color}
										numElements={UniqueTechStacks.length}
										style={{
											backgroundColor:
												currentTech >= 0 ? '#' + UniqueTechStacks[currentTech].color : '#ffffff'
										}}
									>
										<img src={`/LanguageCodeSnippets/${UniqueTechStacks[currentTech].name}.svg`} />
									</SubCard>
								</motion.div>
							) : null}
						</AnimatePresence>
					</CardWrapper>
				</motion.div>
			</SubSection>
		</div>
	);
}
