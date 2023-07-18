import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './SmallItem.module.css'

import { Typeography } from '../../../../../../ui/Typeography'

export const SmallItem = forwardRef(({ data }, ref) => {
	return (
		<div className={styles.column} ref={ref}>
			<div className={styles.photo}>
				<img src={data?.photo} alt='' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<div className={styles.hashtag}>
					<Typeography variant={'span'} color={'white'}>
						{data?.hashtag}
					</Typeography>
				</div>
				<div className={styles.title}>
					<Typeography
						fontSize={'14px'}
						variant={'h2'}
						color={'white'}
						fontWeight={700}
					>
						{data?.title}
					</Typeography>
				</div>
			</div>
		</div>
	)
})
export const MSmallItem = motion(SmallItem)
