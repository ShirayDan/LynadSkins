import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import styles from './BuyBtn.module.css'
import { updateUser } from '../../../../redux/slices/auth'
import { updateSkin } from '../../../../redux/slices/skins'
import { resetChange } from '../../../../redux/slices/change'
import axios from '../../../../axios'

import { Typeography } from '../../../../ui/Typeography'
import { SmallItem } from '../../../../components/SmallItem/SmallItem'

import { FaShoppingCart } from 'react-icons/fa'
import { Button } from '../../../../ui/Button'

export const BuyBtn = () => {
	const dispatch = useDispatch()
	const [modal, setModal] = useState(false)
	const [error, setError] = useState('')
	const change = useSelector((state) => state.change)

	let yourSum = 0
	let otherSum = 0
	change.yourItems.forEach((item) => (yourSum += item.price))
	change.marketItems.forEach((item) => (otherSum += item.price))

	const openModal = () => {
		setModal((state) => !state)
	}

	const handleChange = async () => {
		if (yourSum < otherSum) {
			setError('You need to add more your item to trade')
			return
		} else {
			setError('')
		}
		const diff = Number((yourSum - otherSum).toFixed(2))

		let user = null
		const token = window.localStorage.getItem('token')
		await axios.get('/auth/me', token).then((res) => {
			user = res.data
		})
		dispatch(
			updateUser({
				...user,
				money: Number((user?.money + diff).toFixed(2)),
			})
		)
		change.yourItems.forEach((el) => {
			let item = { ...el }
			item.user = '64c67e9ec184782a2302468b'
			item.color = item.color.join(',')
			item.onTrade = true

			dispatch(updateSkin(item))
		})
		change.marketItems.forEach((el) => {
			let sellerMoney = 0
			axios.post('/userMoney', { _id: `${el.user}` }).then((res) => {
				sellerMoney = res.data
				sellerMoney += el.price

				axios.patch('/userMoney', { _id: `${el.user}`, money: sellerMoney })
			})
			let item = { ...el }
			item.user = user?._id
			item.color = item.color.join(',')
			item.onTrade = false
			dispatch(updateSkin(item))
		})
		dispatch(resetChange())
	}
	return (
		<>
			<div className={styles.btn} onClick={() => openModal()}>
				<div className={styles.inventory}>
					<Typeography color={'white'} fontSize={'20px'}>
						$ {yourSum}
					</Typeography>
					<Typeography color={'white'}>You offer</Typeography>
				</div>
				<FaShoppingCart fill='var(--text-primary)' />
				<div className={styles['trade-place']}>
					{' '}
					<Typeography color={'white'} fontSize={'20px'}>
						$ {otherSum}
					</Typeography>
					<Typeography color={'white'}>You will get</Typeography>
				</div>
			</div>
			<AnimatePresence initial={false}>
				{modal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.modal}>
						<div className={styles.list}>
							<div>
								<Typeography variant={'h3'} color={'white'} m={'5px 0'}>
									Your offer
								</Typeography>
								<div className={styles.skins}>
									{change.yourItems.map((item) => {
										return (
											<SmallItem data={item} key={item._id} type={'change'} />
										)
									})}
								</div>
							</div>
							<div>
								<Typeography variant={'h3'} color={'white'} m={'5px 0'}>
									You want
								</Typeography>
								<div className={styles.skins}>
									{change.marketItems.map((item) => {
										return (
											<SmallItem data={item} key={item._id} type={'change'} />
										)
									})}
								</div>
							</div>
						</div>
						<div className={styles.change}>
							<Button
								text={'Change'}
								onClick={() => handleChange()}
								style={styles['btn-confirm']}
							/>
							{error && <Typeography color={'error'}>{error}</Typeography>}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
