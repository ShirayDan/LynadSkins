import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../../../ui/Button'
import { Typeography } from '../../../../../../ui/Typeography'
import styles from './Item.module.css'

export const Item = ({ img, exterior, price, width, alt }) => {
	const nav = useNavigate()
	return (
		<div className={styles.item} style={{ width: width }}>
			<img
				src={img}
				alt={alt}
				className={styles.photo}
				loading='eager'
				title={alt}
			/>
			<div className={styles.description}>
				<Typeography variant={'h4'} color={'white'}>
					{exterior}
				</Typeography>
				<Typeography color={'white'}>
					{' '}
					From
					<Typeography variant={'span'} color={'white'}>
						{' '}
						{price}
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
