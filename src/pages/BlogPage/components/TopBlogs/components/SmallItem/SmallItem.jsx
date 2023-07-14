import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './SmallItem.module.css'

import { Typeography } from '../../../../../../ui/Typeography'

export const SmallItem = forwardRef(({ photo, title, hashtag }, ref) => {
	return (
		<div className={styles.column} ref={ref}>
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
})
export const MSmallItem = motion(SmallItem)
