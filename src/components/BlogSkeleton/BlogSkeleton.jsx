import React from 'react'
import { Container } from '../../ui/Container'
import styles from './BlogSkeleton.module.css'

export const BlogSkeleton = () => {
	return (
		<Container styles={styles.container}>
			<div className={`${styles.img} ${styles.pulse}`}></div>
			<div className={styles.column}>
				<div className={`${styles.short} ${styles.pulse}`}></div>
				<div className={`${styles.long} ${styles.pulse}`}></div>
			</div>
		</Container>
	)
}
