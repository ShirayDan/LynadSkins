import { motion } from 'framer-motion'
import React from 'react'
import styles from './Knife.module.css'

export const Knife = ({ name, img, textStyle, lineStyle, imgStyles }) => {
	const knifeAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: { delay: custom * 0.2 },
			rotateZ: 10,
		}),
	}

	const knifeTextAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<motion.div
				custom={2}
				variants={knifeTextAnimation}
				className={styles[lineStyle]}
			>
				<motion.div
					custom={2}
					variants={knifeTextAnimation}
					className={styles.bullet}
				></motion.div>
				<motion.p
					custom={2}
					variants={knifeTextAnimation}
					className={styles[textStyle]}
				>
					{name}
				</motion.p>
			</motion.div>
			<motion.img
				custom={1}
				variants={knifeAnimation}
				src={img}
				alt={name}
				className={imgStyles}
			/>
		</motion.div>
	)
}
