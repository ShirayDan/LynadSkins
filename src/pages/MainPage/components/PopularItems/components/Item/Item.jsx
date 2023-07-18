import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../../../ui/Button'
import { Typeography } from '../../../../../../ui/Typeography'
import styles from './Item.module.css'

export const Item = ({ data }) => {
	const nav = useNavigate()
	return (
		<div className={styles.item}>
			<img
				src={data.img}
				alt={data.alt}
				className={styles.photo}
				loading='eager'
				title={data.alt}
			/>
			<div className={styles.description}>
				<Typeography variant={'h4'} color={'white'}>
					{data.exterior}
				</Typeography>
				<Typeography color={'white'}>
					{' '}
					From
					<Typeography variant={'span'} color={'white'}>
						{' '}
						{data.price}
					</Typeography>
				</Typeography>
			</div>
			<div className={styles.bottom}>
				<Button
					text={'Store'}
					hover={true}
					onClick={() => nav('/market')}
				></Button>
			</div>
		</div>
	)
}
