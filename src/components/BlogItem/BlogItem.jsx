import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './BlogItem.module.css'

import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

export const BlogItem = forwardRef(
	(
		{
			id,
			hashtags,
			title,
			time,
			top,
			description,
			imageUrl,
			user,
			isFullPost,
			isLoading,
			isEditable,
		},
		ref
	) => {
		return (
			<Container ref={ref} styles={`${styles.container} ${top && styles.top}`}>
				<div className={styles.column}>
					<img src={imageUrl} className={styles.photo} alt='' />
				</div>
				<div className={styles.column}>
					<div className={styles.hashtags}>
						<List variant={'ul'} display={'flex'} mt={'5px'}>
							<ListItem style={styles.hashtag}>
								{hashtags?.map((item, i) => (
									<a key={i} href='/blog' className={styles.link}>
										#{item}
									</a>
								))}
							</ListItem>
						</List>

						{time && (
							<Typeography variant='span' color={'white'} fontSize={'12px'}>
								{time.substring(0, 10)}
							</Typeography>
						)}
					</div>
					<div className={styles.title}>
						{top ? (
							<h1 className={`${styles.titled} ${top && styles.mainTitle}`}>
								{isFullPost ? (
									title
								) : (
									<Link className={styles.titled} to={`/blog/${id}`}>
										{title}
									</Link>
								)}
							</h1>
						) : (
							<h2 className={`${styles.titled} ${top && styles.mainTitle}`}>
								{isFullPost ? (
									title
								) : (
									<Link className={styles.titled} to={`/blog/${id}`}>
										{title}
									</Link>
								)}
							</h2>
						)}

						<div className={styles.description}>
							{top && <Typeography color={'grey'}>{description}</Typeography>}
						</div>
					</div>
				</div>
			</Container>
		)
	}
)
export const MBlogItem = motion(BlogItem)
