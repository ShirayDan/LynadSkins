import React from 'react'
import { BlogItem } from '../../components/BlogItem'
import img1 from '../../i/hotskins_eng-768x432.png'
import { Container } from '../../ui/Container'
import styles from './BlogPage.module.css'
import { OtherBlog } from './components/OtherBlogs'
import { TopBlog } from './components/TopBlogs'

export const BlogPage = () => {
	return (
		<Container styles={styles.container}>
			<div className={styles.top}>
				<BlogItem
					photo={img1}
					title={'Top Hottest Skins of Summer 2023!'}
					hashtags={'SKINS'}
					top={true}
					description={
						'Summer is the time to update your inventory with bright skins! CS.MONEY Blog compiled a list of best skins of 2023 so you can style up.'
					}
				/>
				<TopBlog />
			</div>
			<OtherBlog />
		</Container>
	)
}
