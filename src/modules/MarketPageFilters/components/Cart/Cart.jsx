import React, { useState } from 'react'
import styles from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../../../../redux/slices/cart'
import { updateSkin } from '../../../../redux/slices/skins'
import { updateUser } from '../../../../redux/slices/auth'
import { setState } from '../../../../redux/slices/marketItems'
import { useTranslation } from 'react-i18next'
import axios from '../../../../axios'

import { SmallModalEmpty } from '../../../../components/SmallModalEmpty'
import { SmallModalInner } from '../../../../components/SmallModalInner/SmallModalInner'
import { Button } from '../../../../ui/Button'
import { Container } from '../../../../ui/Container'

export const Cart = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const [warning, setWarning] = useState('')
	const data = useSelector((state) => state.cart)
	const state = useSelector((state) => state.marketItems)
	console.log(state)

	const handleBuy = async (values) => {
		let sum = values.reduce((a, b) => a.price + b.price)
		const token = window.localStorage.getItem('token')
		let user = null
		await axios.get('/auth/me', token).then((res) => {
			user = res.data
		})
		if (user?.money < sum) {
			setWarning('You need to donate some money')
			return
		} else {
			setWarning('')
		}
		values.forEach((el) => {
			let sellerMoney = 0
			axios.post('/userMoney', { _id: `${el.user}` }).then((res) => {
				sellerMoney = res.data
				sellerMoney += el.price
				axios.patch('/userMoney', { _id: `${el.user}`, money: sellerMoney })
			})
			let item = { ...el }
			item.user = user?._id
			item.onTrade = false
			item.color = item.color.join(',')
			dispatch(
				updateUser({
					...user,
					money: Number((user?.money - item.price).toFixed(2)),
				})
			)
			dispatch(updateSkin(item))
			handleResetCart()

			dispatch(setState(!state.state))
		})
	}

	const handleResetCart = () => {
		dispatch(resetCart([]))
	}

	return (
		<Container styles={styles.container}>
			{data?.length ? (
				<>
					<SmallModalInner data={data} type={'Cart'} />
					{warning && <div className={styles.warning}>{warning}</div>}
					<div className={styles.btns}>
						<Button
							text={t('buy')}
							onClick={() => handleBuy(data)}
							style={styles.btn}
						/>
						<Button
							text={t('reset_cart')}
							onClick={handleResetCart}
							style={styles.btn}
						/>
					</div>
				</>
			) : (
				<SmallModalEmpty message={t('cart_empty')} desc={t('add_cart_items')} />
			)}
		</Container>
	)
}
