import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { changeOverflow } from '../../helpers/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../redux/slices/cart'
import { updateSkin } from '../../redux/slices/skins'
import { useTranslation } from 'react-i18next'
import styles from './Item.module.css'

import { ItemModal } from '../../components/ItemModal'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'

import { FaShoppingCart } from 'react-icons/fa'

export const Item = ({ data }) => {
	const dispatch = useDispatch()
	const currency = useSelector((state) => state.currency)
	const { t } = useTranslation()

	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
		changeOverflow(open)
	}

	const addToCart = () => {
		dispatch(addCart(data))
	}

	const handleTrade = (data) => {
		let item = { ...data }
		item.onTrade = !item.onTrade
		item.color = item.color.join(',')
		dispatch(updateSkin(item))
	}
	const page = window.location.href.match('/profile')

	return (
		<>
			<div className={styles.item} onClick={() => handleClick()}>
				<img
					src={data?.img || data?.imageUrl}
					alt={`${data?.item || data?.itemName}-${
						data?.skin || data?.skinName
					}`}
					className={styles.photo}
					loading='lazy'
				/>
				<div
					className={`${styles.description} ${
						data?.person && styles.description_bottom
					}`}>
					<Typeography variant={'h3'} fontSize={'16px'} color={'grey'}>
						<Typeography variant={'span'} color={'gold'} fontSize={'16px'}>{`${
							data?.souvenir === true ? 'SV ' : ''
						}`}</Typeography>
						<Typeography variant={'span'} fontSize={'16px'}>{`${
							data?.souvenir === true ? '/ ' : ''
						}`}</Typeography>
						<Typeography
							variant={'span'}
							fontSize={'16px'}
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
					<Typeography color={'white'} fontSize={'16px'}>
						{currency.currency === 'usd'
							? `$ ${data?.price.toFixed(2)}`
							: `₴ ${(data?.price * 36.7).toFixed(2)}`}
					</Typeography>
				</div>
				{!data?.person && (
					<Button
						style={styles.btn}
						onClick={page ? () => handleTrade(data) : () => addToCart()}
						text={
							page ? (
								(data?.onTrade && t('remove_sale')) || t('sale')
							) : (
								<FaShoppingCart />
							)
						}></Button>
				)}
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<Modal
						handleClick={() => handleClick()}
						children={
							<ItemModal data={data} addToCart={addToCart} page={page} />
						}
						guns={true}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
