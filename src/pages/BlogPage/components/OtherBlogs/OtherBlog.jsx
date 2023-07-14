import React from 'react'
import { MBlogItem } from '../../../../components/BlogItem'
import { MBlogSkeleton } from '../../../../components/BlogSkeleton'
import { MContainer } from '../../../../ui/Container'
import styles from './OtherBlog.module.css'

import img1 from '../../../../i/hotskins_eng-768x432.png'

export const OtherBlog = () => {
	const isPostsLoading = false

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

	const data = [
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},

		{
			photo: img1,
			title: 'Top Hottest Skins of Summer 2023!',
			hashtags: 'Skins',
			time: '10 Jul. 2023',
			description:
				'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.',
		},
	]

	return (
		<MContainer
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			styles={styles.container}
		>
			{(isPostsLoading ? [...Array(9)] : data).map((item, i) =>
				isPostsLoading ? (
					<MBlogSkeleton variants={textAnimation} custom={i + 2} />
				) : (
					<MBlogItem
						photo={item.photo}
						title={item.title}
						hashtags={item.hashtags}
						time={item.time}
						description={item.description}
						variants={textAnimation}
						custom={i + 2}
					/>
				)
			)}
		</MContainer>
	)
}
