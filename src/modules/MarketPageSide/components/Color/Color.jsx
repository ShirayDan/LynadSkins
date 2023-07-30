import React from 'react'
import styles from './Color.module.css'

import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'

export const Color = ({ register }) => {
	const colors = [
		{ first: '#106b50', second: '#5cc14c', val: 'green' },
		{ first: '#000', second: '#222', val: 'black' },
		{ first: '#bcc9cb', second: '#fff', val: 'white' },
		{ first: '#f03d3d', second: '#f0733d', val: 'red' },
		{ first: '#8340f0', second: '#f54cef', val: 'purple' },
		{ first: '#dfa93f', second: '#f0de3d', val: 'yellow' },
		{ first: '#1c40ff', second: '#268ded', val: 'blue' },
		{ first: '#775536', second: '#b87e48', val: 'orange' },
	]

	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<List variant={'div'} display={'flex'} flexWrap={'wrap'} gap={'10px'}>
				{colors.map((item, i) => {
					return (
						<>
							<label
								htmlFor={item.val}
								className={styles.item}
								style={{ backgroundColor: item.first }}></label>
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
