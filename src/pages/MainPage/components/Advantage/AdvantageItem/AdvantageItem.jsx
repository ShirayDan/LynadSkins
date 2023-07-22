import { motion } from 'framer-motion'
import React from 'react'
import { MTypeography } from '../../../../../ui/Typeography'
export const AdvantageItem = ({ data }) => {
	const textAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}>
			<MTypeography
				variants={textAnimation}
				custom={1}
				color={'white'}
				variant={'h2'}
				after={'title'}>
				{data.title}
			</MTypeography>
			<MTypeography variants={textAnimation} custom={1} color={'grey'}>
				{data.text}
			</MTypeography>
		</motion.div>
	)
}
