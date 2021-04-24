import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Section() {
	const [ currentTech, setcurrentTech ] = useState(-1);
	const SubSection = styled.div`
		height: fit-content;
		width: 100%;
		/* display: grid;
	grid-template-columns: 0.5fr 2fr; */
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
		/* position: absolute; */
		/* bottom: 0; */
	`;

	const CardWrapper = styled.div`
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;

		/* overscroll-behavior: contain; */
	`;

	const Card =
		styled.div <
		{ grayscale: boolean } >
		`
	filter: ${(props) => {
		return props.grayscale ? 'grayscale(100%)' : 'grayscale(0%)';
	}} `;

	const SubCard =
		styled.div <
		{ bgColor: string, index: number, numElements: number } >
		`background-color: ${(props) => {
			return '#' + props.bgColor;
		}};
	position:absolute;
	
	width:${(props) => {
		return props.numElements * 100 + '%';
	}};

	height:auto;

	left:${(props) => {
		return '-' + props.index * 100 + '%';
	}};

	// overflow-x:auto;
	// overflow-y:hidden;
	 `;

	const UniqueTechStacks = [
		{ name: 'typescript', color: '007ACC' },
		{ name: 'javascript', color: 'F7DF1E' },
		{ name: 'python', color: '14354C' },
		{ name: 'javascript', color: 'F7DF1E' }
	];
	return (
		<div>
			<SubHeading>{'<Lanuguages/>'}</SubHeading>
			<SubSection
				style={{
					backgroundColor: currentTech >= 0 ? '#' + UniqueTechStacks[currentTech].color : '#ffffff'
				}}
			>
				<CardWrapper>
					{UniqueTechStacks.map((uniq, index) => {
						return (
							<motion.div
								onHoverStart={() => {
									setcurrentTech(index);
								}}
								onHoverEnd={() => {
									setcurrentTech(-1);
								}}
								key={index}
							>
								<Card
									onClick={(e) => {
										if (currentTech === -1 || currentTech !== index) setcurrentTech(index);
										else setcurrentTech(-1);
									}}
									grayscale={currentTech === index ? false : true}
								>
									<img src={`/TechIcon/${uniq.name}.svg`} />
									{currentTech === index ? (
										<AnimatePresence>
											<motion.div
												initial={{ scaleY: 0 }}
												animate={{ scaleY: 1 }}
												transition={{ duration: 0.5 }}
												exit={{ opacity: 0 }}
											>
												<SubCard
													bgColor={UniqueTechStacks[currentTech].color}
													index={index}
													numElements={UniqueTechStacks.length}
												>
													<img
														src={`/LanguageCodeSnippets/${UniqueTechStacks[currentTech]
															.name}.svg`}
													/>
												</SubCard>
											</motion.div>
										</AnimatePresence>
									) : null}
								</Card>
							</motion.div>
						);
					})}
				</CardWrapper>
			</SubSection>
		</div>
	);
}
