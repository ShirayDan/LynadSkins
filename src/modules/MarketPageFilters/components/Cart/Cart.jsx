import React from 'react'
import styles from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../../../../redux/slices/cart'

import { SmallModalEmpty } from '../../../../components/SmallModalEmpty'
import { SmallModalInner } from '../../../../components/SmallModalInner/SmallModalInner'
import { Button } from '../../../../ui/Button'
import { Container } from '../../../../ui/Container'

export const Cart = () => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.cart)

	const handleBuy = () => {}
	const handleResetCart = () => {
		dispatch(resetCart([]))
	}

	return (
		<Container styles={styles.container}>
			{data?.length ? (
				<>
					<SmallModalInner data={data} type={'Cart'} />
					<div className={styles.btns}>
						<Button text={'Buy'} onClick={handleBuy} style={styles.btn} />
						<Button
							text={'Empty Cart'}
							onClick={handleResetCart}
							style={styles.btn}
						/>
					</div>
				</>
			) : (
				<SmallModalEmpty
					message={'Your cart is empty'}
					desc={'Add some items you want to purchase from our inventory'}
				/>
			)}
		</Container>
	)
}
