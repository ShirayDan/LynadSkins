import React from 'react'
import { List } from '../../../../../../ui/List'
import { ListItem } from '../../../../../../ui/ListItem'
import { Typeography } from '../../../../../../ui/Typeography/Typeography'
import styles from './AdvantageSliderItems.module.css'
export const AdvantageSliderItems = ({ content }) => {
	return (
		<div className={styles.item}>
			<div className={styles.subcont}>
				<Typeography mt={'10px'} color={'purple'} variant={'h3'}>
					{content.title}
				</Typeography>
			</div>
			<Typeography color={'white'} mt={'10px'}>
				{content.text}
			</Typeography>

			<List mt={'10px'} variant={'ul'}>
				{content.advantages.map((item, i) => {
					return (
						<ListItem key={i} style={styles.listItems}>
							{item}
						</ListItem>
					)
				})}
			</List>
		</div>
	)
}
