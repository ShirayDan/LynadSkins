import React from 'react'
import styles from './Fav.module.css'

import { SmallModalEmpty } from '../../../../components/SmallModalEmpty'
import { SmallModalInner } from '../../../../components/SmallModalInner/SmallModalInner'
import { Button } from '../../../../ui/Button'
import { Container } from '../../../../ui/Container'

import img1 from '../../../../i/1.webp'

export const Fav = () => {
	const data = [
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
		{
			id: 1,
			item: 'AK-47',
			skin: 'Elite Build',
			img: img1,
			exterior: 'Field-Tested',
			rarity: 'Mil-Spec Grade',
			price: 13.3,
			float: 0.210546776,
			statTrak: true,
			souvenir: false,
			type: 'Assault Rifles',
			color: ['black'],
		},
	]

	return (
		<Container styles={styles.container}>
			{data.length ? (
				<>
					<SmallModalInner data={data} type={'Favorites'} />
					<div className={styles.btns}>
						<Button text={'Reset favorites'} style={styles.btn} />
					</div>
				</>
			) : (
				<SmallModalEmpty
					message={'Your wishlist is empty'}
					desc={'Add some items to see them in wishlist'}
				/>
			)}
		</Container>
	)
}
