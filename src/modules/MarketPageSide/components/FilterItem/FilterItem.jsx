import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import styles from './FilterItem.module.css'

import { Typeography } from '../../../../ui/Typeography'

export const FilterItem = ({ filter, fullList }) => {
	const [open, setOpen] = useState(false)
	const showAll = () => {
		setOpen(!open)
	}
	return (
		<>
			<div className={styles['filter-item']} onClick={showAll}>
				<Typeography color={'white'} fontSize={'20px'}>
					{filter}
				</Typeography>
				<div className={styles.icon}>
					{open ? (
						<span className={styles['icon-minus']}>-</span>
					) : (
						<span className={styles['icon-plus']}>+</span>
					)}
				</div>
			</div>
			<AnimatePresence initial={false}>{open && fullList}</AnimatePresence>
		</>
	)
}
