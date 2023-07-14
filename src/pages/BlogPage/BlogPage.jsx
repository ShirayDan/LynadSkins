import { motion } from 'framer-motion'
import React from 'react'
import styles from './BlogPage.module.css'

import { MBlogItem } from '../../components/BlogItem'
import { MBlogSkeleton } from '../../components/BlogSkeleton'
import { Container } from '../../ui/Container'
import { OtherBlog } from './components/OtherBlogs'
import { TopBlog } from './components/TopBlogs'

import img1 from '../../i/hotskins_eng-768x432.png'

export const BlogPage = () => {
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

	return (
		<Container styles={styles.container}>
			<motion.div
				className={styles.top}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				{isPostsLoading ? (
					<MBlogSkeleton variants={textAnimation} top={true} custom={1} />
				) : (
					<MBlogItem
						photo={img1}
						title={'Top Hottest Skins of Summer 2023!'}
						hashtags={'SKINS'}
						top={true}
						description={
							'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.'
						}
						variants={textAnimation}
						custom={1}
					/>
				)}
				<TopBlog />
			</motion.div>
			<OtherBlog />
		</Container>
	)
}
