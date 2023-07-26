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
	const cart = useSelector((state) => state.cart)
	const currency = useSelector((state) => state.currency)
	const [status, setStatus] = useState(data?.onTrade)
	const { t } = useTranslation()
	const [open, setOpen] = useState(false)

	const handleClick = (e) => {
		if (
			e.target.classList.length === 0 ||
			e.target.classList[0].substr(0, 6) === 'Button'
		) {
			return
		}
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
		setStatus(!status)
	}
	const index = cart.findIndex((item) => data._id === item._id)

	const page = window.location.href.match('/profile')

	return (
		<>
			<div className={styles.item} onClick={(e) => handleClick(e)}>
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
						style={`${styles.btn} ${index !== -1 && styles['btn-cart']}`}
						onClick={page ? () => handleTrade(data) : () => addToCart()}
						disabled={index !== -1 && true}
						text={
							page ? status ? t('remove_sale') : t('sale') : <FaShoppingCart />
						}></Button>
				)}
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<Modal
						handleClick={(e) => handleClick(e)}
						children={
							<ItemModal
								data={data}
								addToCart={addToCart}
								page={page}
								handleTrade={handleTrade}
								status={status}
							/>
						}
						guns={true}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
