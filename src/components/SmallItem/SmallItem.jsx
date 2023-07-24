import React from 'react'
import styles from './SmallItem.module.css'
import { removeItem } from '../../redux/slices/cart'
import { useDispatch } from 'react-redux'
import { removeWishItem } from '../../redux/slices/wishlist'

import { Container } from '../../ui/Container'
import { Typeography } from '../../ui/Typeography'

import { FaTrash } from 'react-icons/fa'

export const SmallItem = ({ data, type }) => {
	const dispatch = useDispatch()

	const handleRemoveCart = (id) => {
		dispatch(removeItem(id))
	}

	const handleRemoveWish = (id) => {
		dispatch(removeWishItem(id))
	}

	return (
		<Container>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={data?.imageUrl}
						alt={`${data?.itemName}-${data?.skinName}`}
						className={styles.photo}
					/>
					<div className={styles.description}>
						<Typeography variant={'h3'} fontSize={'12px'} color={'white'}>
							{data?.itemName}
						</Typeography>
						<Typeography variant={'h4'} fontSize={'12px'} color={'white'}>
							{data?.skinName + ' (' + data.exterior + ')'}
						</Typeography>
						<Typeography fontSize={'12px'} color={'grey'}>
							<Typeography
								variant={'span'}
								color={'gold'}
								fontSize={'12px'}>{`${
								data?.souvenir === true ? 'SV ' : ''
							}`}</Typeography>
							<Typeography variant={'span'} fontSize={'12px'}>{`${
								data?.souvenir === true ? '/ ' : ''
							}`}</Typeography>
							<Typeography
								variant={'span'}
								fontSize={'12px'}
								color={'orange'}>{`${
								data?.statTrak === true ? 'ST ' : ''
							}`}</Typeography>
							{data?.statTrak === true
								? `/ ${data?.exterior
										.replace(/([-])/g, ' ')
										.replace(/([a-z," "])/g, '')} / ${data?.float
										.toString()
										.substring(0, 4)}`
								: `${data?.exterior
										.replace(/([-])/g, ' ')
										.replace(/([a-z," "])/g, '')} / ${data?.float
										.toString()
										.substring(0, 4)}`}
						</Typeography>
						<Typeography
							color={'white'}
							fontSize={'16px'}>{`$ ${data?.price.toFixed(2)}`}</Typeography>
					</div>
				</div>

				<div className={styles.bucket}>
					<div className={styles['bucket-icon']}>
						<FaTrash
							className={styles['icon-bucket']}
							fontSize={'14px'}
							fill='white'
							onClick={
								type == 'Cart'
									? () => handleRemoveCart(data?._id)
									: () => handleRemoveWish(data?._id)
							}
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
