import { motion } from 'framer-motion'
import { Typeography } from '../../../../ui/Typeography'
import styles from './Price.module.css'

export const Price = ({ register }) => {
	return (
		<motion.div
			className={styles.accordion}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<input
				type='text'
				placeholder='0.00'
				className={styles.priceInput}
				{...register('price.min', {})}
			/>
			<Typeography color={'white'} m={'0 15px'}>
				-
			</Typeography>
			<input
				type='text'
				placeholder='∞'
				className={styles.priceInput}
				{...register('price.max', {})}
			/>
		</motion.div>
	)
}
