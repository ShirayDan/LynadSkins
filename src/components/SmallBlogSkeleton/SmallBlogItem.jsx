import React from 'react'
import { Container } from './../../ui/Container'
import styles from './SmallBlogItem.module.css'

export const SmallBlogItem = () => {
	return (
		<Container styles={styles.container}>
			<div className={`${styles.photo} ${styles.pulse}`}></div>
			<div>
				<div className={`${styles.hashtag} ${styles.pulse}`}></div>
				<div className={`${styles.title} ${styles.pulse}`}></div>
			</div>
		</Container>
	)
}
