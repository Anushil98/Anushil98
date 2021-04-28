import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	height: 100%;
	width: 100%;
	border-style: dashed;
	position: relative;
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
				style={{ backgroundColor: 'white' }}
				initial={{ height: '100px', width: '100px', position: 'absolute', left: props.index * 100 + 'px' }}
				whileHover={{
					height: '150px',
					width: '150px',
					position: 'absolute',
					zIndex: 2,
					left: props.index * 100 - 20 + 'px',
					top: '-20px',
					transition: { delay: 0.5 }
				}}
				onHoverStart={() => {
					setzommedView((x) => !x);
				}}
				onHoverEnd={() => {
					setzommedView((x) => !x);
				}}
			>
				<Card>
					<Image src={props.data.imageUrl} layout={'fill'} />
					{zommedView ? (
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
							Zoomed View
						</motion.div>
					) : null}
				</Card>
			</motion.div>
		</AnimatePresence>
	);
}

export default ZoomCard;
