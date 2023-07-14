import React from 'react'
import styles from './TopBlog.module.css'

import { MSmallBlogItem } from '../../../../components/SmallBlogSkeleton/SmallBlogItem'
import { MContainer } from '../../../../ui/Container'
import { MSmallItem } from './components/SmallItem'

import img2 from '../../../../i/contr.jpg'
import img1 from '../../../../i/marketupdate.webp'
import img3 from '../../../../i/patterns.webp'
import img4 from '../../../../i/souvenir-1.webp'

export const TopBlog = () => {
	const isTopPostsLoading = false

	const textAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

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
		<MContainer
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			styles={styles.container}
		>
			{(isTopPostsLoading ? [...Array(4)] : data).map((item, i) =>
				isTopPostsLoading ? (
					<MSmallBlogItem custom={i + 2} variants={textAnimation} />
				) : (
					<MSmallItem
						photo={item.photo}
						hashtag={item.hashtag}
						title={item.title}
						custom={i + 2}
						variants={textAnimation}
					/>
				)
			)}
		</MContainer>
	)
}
