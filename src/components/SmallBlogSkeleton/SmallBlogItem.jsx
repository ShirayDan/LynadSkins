import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './SmallBlogItem.module.css'

import { Container } from './../../ui/Container'

export const SmallBlogItem = forwardRef(({}, ref) => {
	return (
		<Container ref={ref} styles={styles.container}>
			<div className={`${styles.photo} ${styles.pulse}`}></div>
			<div>
				<div className={`${styles.hashtag} ${styles.pulse}`}></div>
				<div className={`${styles.title} ${styles.pulse}`}></div>
			</div>
		</Container>
	)
})
export const MSmallBlogItem = motion(SmallBlogItem)
