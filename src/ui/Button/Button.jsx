import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './Button.module.css'

export const Button = forwardRef(
	({ text, style, onClick, disabled, hover }, ref) => {
		let cl = styles.btn
		if (style) {
			cl += ` ${style}`
		}
		if (hover == true) {
			cl += ` ${styles['btn-hover']}`
		}
		return (
			<motion.button
				ref={ref}
				whileTap={!disabled && { scale: 0.8 }}
				disabled={disabled}
				className={cl}
				onClick={onClick}
			>
				{text}
			</motion.button>
		)
	}
)
export const MButton = motion(Button)
