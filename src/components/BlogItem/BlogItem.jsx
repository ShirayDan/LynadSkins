import React from 'react'
import { Container } from '../../ui/Container'
import { Typeography } from '../../ui/Typeography'
import styles from './BlogItem.module.css'

export const BlogItem = ({
	photo,
	hashtags,
	title,
	time,
	top,
	description,
}) => {
	return (
		<Container styles={`${styles.container} ${top && styles.top}`}>
			<div className={styles.column}>
				<img src={photo} className={styles.photo} alt='' />
			</div>
			<div className={styles.column}>
				<div className={styles.hashtags}>
					<Typeography variant='span' color={'white'} fontSize={'12px'}>
						{hashtags}
					</Typeography>
					{time && (
						<Typeography variant='span' color={'white'} fontSize={'12px'}>
							{time}
						</Typeography>
					)}
				</div>
				<div className={styles.title}>
					<h2 className={`${styles.titled} ${top && styles.mainTitle}`}>
						{title}
					</h2>
					<div className={styles.description}>
						{top && <Typeography color={'grey'}>{description}</Typeography>}
					</div>
				</div>
			</div>
		</Container>
	)
}
