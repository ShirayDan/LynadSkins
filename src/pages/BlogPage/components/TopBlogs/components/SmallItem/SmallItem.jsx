import React from 'react'
import { Typeography } from '../../../../../../ui/Typeography'
import styles from './SmallItem.module.css'

export const SmallItem = ({ photo, title, hashtag }) => {
	return (
		<div className={styles.column}>
			<div className={styles.photo}>
				<img src={photo} alt='' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<div className={styles.hashtag}>
					<Typeography variant={'span'} color={'white'}>
						{hashtag}
					</Typeography>
				</div>
				<div className={styles.title}>
					<Typeography variant={'h6'} color={'white'} fontWeight={700}>
						{title}
					</Typeography>
				</div>
			</div>
		</div>
	)
}
