import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './BlogSkeleton.module.css'

import { Container } from '../../ui/Container'

export const BlogSkeleton = forwardRef(({ top }, ref) => {
	return (
		<Container ref={ref} styles={`${styles.container} ${top && styles.top}`}>
			<div className={`${styles.img} ${styles.pulse}`}></div>
			<div className={styles.column}>
				<div className={`${styles.short} ${styles.pulse}`}></div>
				<div className={`${styles.long} ${styles.pulse}`}></div>
				{top && <div className={`${styles.description} ${styles.pulse}`}></div>}
			</div>
		</Container>
	)
})
export const MBlogSkeleton = motion(BlogSkeleton)
