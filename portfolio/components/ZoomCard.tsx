import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Card = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
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
	currentIndexMod: Dispatch<SetStateAction<number>>;
	currentIndex: () => number;
}) {
	const [ zommedView, setzommedView ] = useState(false);
	const [ left, setleft ] = useState(-1);
	const getCurrentIndexInside = () => props.currentIndex();
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
				onHoverStart={(e) => {
					setleft(e.pageX - e.offsetX);
					props.currentIndexMod(props.index);

					setTimeout(() => {
						if (props.currentIndex() === props.index) setzommedView((x) => !x);
					}, 1000);
				}}
			>
				<Card>
					<LiveStatus status={props.data.liveState} />
					<img src={props.data.imageUrl} />

					{zommedView && props.currentIndex() === props.index ? (
						createPortal(
							<motion.div
								onHoverEnd={() => {
									setzommedView((x) => !x);
								}}
								style={{
									position: 'absolute',
									zIndex: 4,
									backgroundColor: 'white',
									// left: props.index * 100 + 'px',
									left: `min(calc(${left}px - 10vw),calc( 80vw - 150px ))`,
									borderStyle: 'solid',
									borderColor: 'black',
									borderRadius: '2%'
								}}
								initial={{ height: '100px', width: '100px', top: '0', opacity: 0 }}
								animate={{
									height: 'fit-content',
									width: '150px',
									opacity: 1,
									transition: { delay: 0.5, duration: 0.5 }
								}}
							>
								<motion.div
									style={{ maxHeight: '200px' }}
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { delay: 1 }
									}}
								>
									<img
										src={props.data.gifUrl}
										style={{
											position: 'relative',
											backgroundColor: 'red',
											height: '100px',
											width: '100%',
											objectFit: 'cover'
										}}
									/>
									<div style={{ position: 'relative', height: '100px', width: '100%' }}>
										{props.data.Name}
									</div>
								</motion.div>
							</motion.div>,
							document.getElementById('test')
						)
					) : null}
				</Card>
			</motion.div>
		</AnimatePresence>
	);
}

export default ZoomCard;
