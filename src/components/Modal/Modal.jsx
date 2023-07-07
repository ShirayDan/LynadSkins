import { motion } from 'framer-motion'
import React from 'react'
import styles from './Modal.module.css'

import { Cross } from '../Cross'

export const Modal = ({ children, handleClick, guns }) => {
	return (
		<motion.div
			className={styles.modal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={styles.overlay} onClick={() => handleClick()}></div>
			<div
				className={`${styles['modal-content']} ${guns && styles['modal-guns']}`}
			>
				{children}
				<Cross cl={styles['close-modal']} onClick={() => handleClick()} />
			</div>
		</motion.div>
	)
}
