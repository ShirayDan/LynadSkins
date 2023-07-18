import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Typeography } from '../../../../ui/Typeography'
import styles from './Advantage.module.css'

export const Advantage = forwardRef(({ data }, ref) => {
	return (
		<div className={styles['advantages-item']} ref={ref}>
			<div className={styles.subcontainer}>
				<div className={styles['img-container']}>
					<img src={data.img} alt={data.text} className={styles.img} />
				</div>
				<Typeography
					color={'white'}
					variant={'h3'}
					fontSize={'24px'}
					m={'10px 0'}
				>
					{data.title}
				</Typeography>
				<Typeography
					color={'grey'}
					p={'0 0 10px 0'}
					className={styles['advantages-text']}
				>
					{data.description}
				</Typeography>
			</div>
			<div className={styles.line}></div>
		</div>
	)
})
export const MAdvantage = motion(Advantage)
