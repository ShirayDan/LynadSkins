import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Currency.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '../../redux/slices/currency'

import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

import { FaChevronDown } from 'react-icons/fa'

export const Currency = () => {
	const { t } = useTranslation()
	const [currencyOpen, setCurrencyOpen] = useState(false)
	const dispatch = useDispatch()

	const currency = useSelector((state) => state.currency)

	const openModal = (val, setVal) => {
		setVal(!val)
	}

	const changeCurrency = (val) => {
		if (currency != val) {
			dispatch(setCurrency(val))
		}
	}
	return (
		<div className={styles['curr-cont']}>
			<div
				className={styles.text}
				onClick={() => openModal(currencyOpen, setCurrencyOpen)}>
				<Typeography color={'white'} hover={true} icon={true}>
					{t('currency')}
					<span
						className={
							currencyOpen
								? `${styles.icon} ${styles['icon-opened']}`
								: styles.icon
						}>
						<FaChevronDown fontSize={'16px'} />
					</span>
				</Typeography>
			</div>
			<AnimatePresence initial={false}>
				{currencyOpen && (
					<motion.div
						className={styles.currency}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<List variant={'ul'}>
							<ListItem
								onClick={() => changeCurrency('usd')}
								style={styles.item}>
								USD
							</ListItem>
							<ListItem
								onClick={() => changeCurrency('uah')}
								style={styles.item}>
								UAH
							</ListItem>
						</List>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
