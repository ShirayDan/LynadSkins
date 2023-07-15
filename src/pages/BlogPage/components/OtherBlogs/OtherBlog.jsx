import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchTags } from '../../../../redux/slices/posts'

import { BlogItem } from '../../../../components/BlogItem'
import { BlogSkeleton } from '../../../../components/BlogSkeleton'
import { MContainer } from '../../../../ui/Container'

import styles from './OtherBlog.module.css'

export const OtherBlog = () => {
	const dispatch = useDispatch()
	const { posts, tags } = useSelector((state) => state.posts)
	const userData = useSelector((state) => state.auth.data)

	let isPostsLoading = posts.status == 'loading'
	const isTagsLoading = tags.status == 'loading'
	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchTags())
	}, [])

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
		<MContainer
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			styles={styles.container}
		>
			{(isPostsLoading ? [...Array(9)] : posts.items).map((item, i) =>
				isPostsLoading ? (
					<BlogSkeleton variants={textAnimation} custom={i + 2} />
				) : (
					<BlogItem
						id={item._id}
						title={item.title}
						imageUrl={
							item.imageUrl ? `http://localhost:4444${item.imageUrl}` : ''
						}
						user={item.user}
						viewsCount={item.viewsCount}
						hashtags={item.tags}
						time={item.createdAt}
						isEditable={userData?._id === item.user._id}
						description={item.description}
						variants={textAnimation}
						custom={i + 2}
					/>
				)
			)}
		</MContainer>
	)
}
