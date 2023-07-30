import React from 'react'
import styles from './Item.module.css'

import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'
export const SideItem = ({ value, text, register, filterParam }) => {
	return (
		<ListItem style={styles.item}>
			<input
				type='checkbox'
				className={styles.input}
				id={value}
				value={value}
				{...register(filterParam, {})}
			/>
			<label htmlFor={value}>
				<Typeography color={'white'}>{text}</Typeography>
			</label>
		</ListItem>
	)
}
