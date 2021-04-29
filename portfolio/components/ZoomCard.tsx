import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	height: 100%;
	width: 100%;
`;

const LiveStatus =
	styled.div <
	{ status: boolean } >
	`
	position: relative;
	height: 10px;
	width: 10px;
	top: 5px;
	left: 77px;
	background-color: ${(props) => {
		if (props.status) {
			return 'green';
		}
		return '#00000000';
	}};
	border-style: solid;
	border-color:#00000000;
	border-radius: 50%;
	z-index: 1;
`;

function ZoomCard(props: {
	data: {
		liveState: boolean;
		Name: string;
		languages: string[];
		techStacks: string[];
		liveUrl?: string;
		codeUrl: string;
		imageUrl?: string;
		gifUrl?: string;
	};
	index: number;
}) {
	const [ zommedView, setzommedView ] = useState(false);
	return (
		<AnimatePresence>
			<motion.div
				style={{
					backgroundColor: 'white',
					display: 'inline-block',
					height: '100px',
					width: '100px',
					borderStyle: 'solid',
					borderRadius: '10%',
					zIndex: 1
				}}
				onHoverStart={() => {
					setzommedView((x) => !x);
				}}
				onHoverEnd={() => {
					setzommedView((x) => !x);
				}}
			>
				<Card>
					<LiveStatus status={props.data.liveState} />
					<img src={props.data.imageUrl} style={{ zIndex: 'inherit' }} />

					{zommedView ? (
						<motion.div
							style={{
								position: 'absolute',
								zIndex: 4,
								backgroundColor: 'white',
								// top: '10px',
								left: props.index * 100,
								borderStyle: 'solid',
								borderColor: 'black',
								borderRadius: '2%'
							}}
							initial={{ height: '100px', width: '100px', top: '5.2vw', opacity: 0 }}
							animate={{
								height: 'fit-content',
								width: '150px',
								opacity: 1,
								transition: { delay: 0.5, duration: 0.5 }
							}}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1 }
								}}
							>
								<img src={props.data.gifUrl} style={{ position: 'relative' }} />
								<p style={{ position: 'relative' }}>{props.data.Name} </p>
							</motion.div>
						</motion.div>
					) : null}
				</Card>
			</motion.div>
		</AnimatePresence>
	);
}

export default ZoomCard;
