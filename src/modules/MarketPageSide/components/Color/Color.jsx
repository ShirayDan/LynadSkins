import React, { useState } from 'react'
import styles from './Color.module.css'

import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'

export const Color = ({ register }) => {
	const [selected, setSelected] = useState([])
	const colors = [
		{ first: '#106b50', val: 'green' },
		{ first: '#000', val: 'black' },
		{ first: '#bcc9cb', val: 'white' },
		{ first: '#f03d3d', val: 'red' },
		{ first: '#8340f0', val: 'purple' },
		{ first: '#dfa93f', val: 'yellow' },
		{ first: '#1c40ff', val: 'blue' },
		{ first: '#e96d0f', val: 'orange' },
	]

	const handleSelected = (val) => {
		if (!selected.findIndex((item) => item === val)) {
			setSelected((state) => state.filter((item) => item !== val))
		} else {
			setSelected((state) => [...state, val])
		}

		console.log(selected)
	}

	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<List variant={'ul'} display={'flex'} flexWrap={'wrap'} gap={'10px'}>
				{colors.map((item) => {
					return (
						<>
							<label
								htmlFor={item.val}
								className={styles.item}
								//`[item-selected]`
								style={{ backgroundColor: item.first }}
								onClick={() => handleSelected(item.val)}></label>
							<input
								id={item.val}
								type='checkbox'
								value={item.val}
								{...register('color', {})}
								hidden
							/>
						</>
					)
				})}
			</List>
		</MContainer>
	)
}
