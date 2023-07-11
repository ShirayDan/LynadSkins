import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { changeOverflow } from '../../helpers/helpers'
import styles from './Item.module.css'

import { ItemModal } from '../../components/ItemModal'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'

import { FaShoppingCart } from 'react-icons/fa'

export const Item = ({
	img,
	exterior,
	price,
	float,
	statTrak,
	souvenir,
	item,
	skin,
	person,
}) => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
		changeOverflow(open)
	}
	return (
		<>
			<div className={styles.item} onClick={() => handleClick()}>
				<img
					src={img}
					alt={`${item}-${skin}`}
					className={styles.photo}
					loading='lazy'
				/>
				<div
					className={`${styles.description} ${
						person && styles.description_bottom
					}`}
				>
					<Typeography variant={'h3'} fontSize={'16px'} color={'grey'}>
						<Typeography variant={'span'} color={'gold'} fontSize={'16px'}>{`${
							souvenir == true ? 'SV ' : ''
						}`}</Typeography>
						<Typeography variant={'span'} fontSize={'16px'}>{`${
							souvenir == true ? '/ ' : ''
						}`}</Typeography>
						<Typeography
							variant={'span'}
							fontSize={'16px'}
							color={'orange'}
						>{`${statTrak == true ? 'ST ' : ''}`}</Typeography>
						{statTrak == true
							? `/ ${exterior
									.replace(/([-])/g, ' ')
									.replace(/([a-z," "])/g, '')} / ${float
									.toString()
									.substring(0, 4)}`
							: `${exterior
									.replace(/([-])/g, ' ')
									.replace(/([a-z," "])/g, '')} / ${float
									.toString()
									.substring(0, 4)}`}
					</Typeography>
					<Typeography color={'white'} fontSize={'16px'}>{`$ ${price.toFixed(
						2
					)}`}</Typeography>
				</div>
				{!person && (
					<Button style={styles.btn} text={<FaShoppingCart />}></Button>
				)}
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<Modal
						handleClick={() => handleClick()}
						children={
							<ItemModal
								img={img}
								statTrak={statTrak}
								souvenir={souvenir}
								item={item}
								skin={skin}
								exterior={exterior}
								price={price}
								float={float}
								btns={person}
							/>
						}
						guns={true}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
