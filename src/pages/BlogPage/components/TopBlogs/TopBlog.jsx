import React from 'react'
import { SmallBlogItem } from '../../../../components/SmallBlogSkeleton/SmallBlogItem'
import { Container } from '../../../../ui/Container'
import styles from './TopBlog.module.css'
import { SmallItem } from './components/SmallItem'

import img2 from '../../../../i/contr.jpg'
import img1 from '../../../../i/marketupdate.webp'
import img3 from '../../../../i/patterns.webp'
import img4 from '../../../../i/souvenir-1.webp'

export const TopBlog = () => {
	let data = [
		{
			photo: img1,
			hashtag: '#News',
			title: 'CS.MONEY Market Update! Store Links and Transactions',
		},
		{
			photo: img2,
			hashtag: '#Cs go',
			title: 'Guide: CS:GO Trade Up Contracts',
		},
		{
			photo: img3,
			hashtag: '#Patterns',
			title: 'Rare AWP Patterns: Fade, BOOM & Others',
		},
		{
			photo: img4,
			hashtag: '#Esports',
			title: 'Ten Best Souvenir Skins In CS:GO',
		},
	]

	return (
		<Container styles={styles.container}>
			{data.map((item, i) => {
				return (
					<SmallItem
						photo={item.photo}
						hashtag={item.hashtag}
						title={item.title}
					/>
				)
			})}
			<SmallBlogItem />
		</Container>
	)
}
