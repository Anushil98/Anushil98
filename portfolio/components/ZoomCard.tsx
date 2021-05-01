import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Card =
	styled.div <
	{ img: string } >
	`
	height: 100%;
	width: 100%;
	position: relative;
	background-image:${(props) => {
		return `url(${props.img})`;
	}};
	background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const LiveStatus =
	styled.div <
	{ status: boolean } >
	`
	position: absolute;
    height: 1vw;
    width: 1vw;
    top: 5px;
    right: 5px;
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
					height: '10vw',
					width: '10vw',
					marginLeft: '2vw',
					borderStyle: 'solid',
					borderRadius: '10%',
					zIndex: 1
				}}
				onHoverStart={(e) => {
					setleft(e.pageX - e.offsetX);
					props.currentIndexMod(props.index);

					setTimeout(() => {
						if (props.currentIndex() === props.index) setzommedView((x) => !x);
					}, 500);
				}}
			>
				<Card img={props.data.imageUrl}>
					<LiveStatus status={props.data.liveState} />
					{/* <img src={props.data.imageUrl} style={{ height: '100%', width: '100%', objectFit: 'contain' }} /> */}

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
									left: `calc(min(calc(${left}px - 10vw),calc( 80vw - 15vw )) - 5px)`,
									top: '3.5vw',
									borderStyle: 'solid',
									borderColor: 'black',
									borderRadius: '2%'
								}}
								initial={{ height: '0', width: '10vw', opacity: 0 }}
								animate={{
									height: '20vw',
									maxHeight: '20vw',
									width: '20vw',
									opacity: 1,
									transition: { delay: 0.5, duration: 0.5 }
								}}
							>
								<motion.div
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-start'
									}}
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { delay: 1 }
									}}
								>
									<div style={{ height: '50%', width: '100%' }}>
										<img
											src={props.data.gifUrl}
											style={{
												position: 'relative',
												backgroundColor: 'white',
												height: '100%',
												width: '100%',
												objectFit: 'scale-down'
											}}
										/>
									</div>
									<div style={{ height: '50%', width: '100%' }}>
										<div style={{ height: '40%', fontFamily: 'cursive', fontSize: '1.5vw' }}>
											{props.data.Name}
										</div>
										<div
											style={{
												height: '50%',
												width: '100%',
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											<a href={props.data.codeUrl}>
												<img
													src="/ViewCodeOnGithub.svg"
													style={{
														position: 'relative',
														backgroundColor: 'white',
														height: '100%',
														width: '100%',
														objectFit: 'scale-down'
													}}
												/>
											</a>
											<a href={props.data.codeUrl}>
												<img
													src="/live.svg"
													style={{
														position: 'relative',
														backgroundColor: 'white',
														height: '100%',
														width: '100%',
														objectFit: 'scale-down'
													}}
												/>
											</a>
										</div>
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
