import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './Typeography.module.css'

const variantsMapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	subheading1: 'h6',
	subheading2: 'h6',
	body1: 'p',
	body2: 'p',
	span: 'span',
}

export const Typeography = forwardRef(
	(
		{
			variant,
			color,
			children,
			before,
			after,
			p,
			mt,
			mb,
			m,
			textAlign,
			fontSize,
			hover,
			icon,
		},
		ref
	) => {
		const Component = variant ? variantsMapping[variant] : 'p'
		let cl = ''
		if (variant) {
			cl += `${styles[variant]}`
		}
		if (color) {
			cl += ` ${styles[color]}`
		}
		if (before) {
			cl += ` ${styles[before]}`
		}
		if (after) {
			cl += ` ${styles[after]}`
		}
		if (hover) {
			cl += ` ${styles['text-hover']}`
		}
		if (icon) {
			cl += ` ${styles.icon}`
		}
		return (
			<Component
				ref={ref}
				className={cl}
				style={{
					padding: p,
					marginTop: mt,
					marginBottom: mb,
					margin: m,
					fontSize,
					textAlign,
				}}
			>
				{children}
			</Component>
		)
	}
)

export const MTypeography = motion(Typeography)
