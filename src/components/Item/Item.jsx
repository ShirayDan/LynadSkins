import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { changeOverflow } from '../../helpers/helpers'
import styles from './Item.module.css'

import { ItemModal } from '../../components/ItemModal'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'

import { FaShoppingCart } from 'react-icons/fa'

export const Item = ({ data }) => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
		changeOverflow(open)
	}
	return (
		<>
			<div className={styles.item} onClick={() => handleClick()}>
				<img
					src={data?.img}
					alt={`${data?.item}-${data?.skin}`}
					className={styles.photo}
					loading='lazy'
				/>
				<div
					className={`${styles.description} ${
						data?.person && styles.description_bottom
					}`}
				>
					<Typeography variant={'h3'} fontSize={'16px'} color={'grey'}>
						<Typeography variant={'span'} color={'gold'} fontSize={'16px'}>{`${
							data?.souvenir == true ? 'SV ' : ''
						}`}</Typeography>
						<Typeography variant={'span'} fontSize={'16px'}>{`${
							data?.souvenir == true ? '/ ' : ''
						}`}</Typeography>
						<Typeography
							variant={'span'}
							fontSize={'16px'}
							color={'orange'}
						>{`${data?.statTrak == true ? 'ST ' : ''}`}</Typeography>
						{data?.statTrak == true
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
						fontSize={'16px'}
					>{`$ ${data?.price.toFixed(2)}`}</Typeography>
				</div>
				{!data?.person && (
					<Button style={styles.btn} text={<FaShoppingCart />}></Button>
				)}
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<Modal
						handleClick={() => handleClick()}
						children={<ItemModal data={data} />}
						guns={true}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
