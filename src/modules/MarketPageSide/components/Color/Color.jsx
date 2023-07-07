import React from 'react'
import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'
import { ListItem } from '../../../../ui/ListItem'
import styles from './Color.module.css'
export const Color = () => {
	const colors = [
		{ first: '#106b50', second: '#5cc14c' },
		{ first: '#000', second: '#222' },
		{ first: '#bcc9cb', second: '#fff' },
		{ first: '#f03d3d', second: '#f0733d' },
		{ first: '#8340f0', second: '#f54cef' },
		{ first: '#dfa93f', second: '#f0de3d' },
		{ first: '#1c40ff', second: '#268ded' },
		{ first: '#775536', second: '#b87e48' },
	]
	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<List variant={'ul'} display={'flex'} flexWrap={'wrap'} gap={'10px'}>
				{colors.map((item) => {
					return (
						<ListItem bg={item.first} style={styles.item}>
							<div
								className={styles.half}
								style={{ background: item.second }}
							></div>
						</ListItem>
					)
				})}
				<ListItem style={styles['item-colorful']}></ListItem>
			</List>
		</MContainer>
	)
}
