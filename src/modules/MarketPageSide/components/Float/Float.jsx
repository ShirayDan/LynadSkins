import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Float.module.css'

export const Float = ({ register }) => {
	const [value, setValue] = useState(1)
	return (
		<motion.div
			className={styles.accordion}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className={styles['show-container']}>
				<div className={styles['show-val']}>0</div>
				<div className={styles['show-val']}>{value}</div>
			</div>
			<input
				type='range'
				min='0'
				max='1'
				step='0.001'
				{...register('float', {})}
				className={styles['float-input']}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</motion.div>
	)
}
