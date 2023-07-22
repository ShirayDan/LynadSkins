import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './BlogItem.module.css'

import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

export const BlogItem = forwardRef(({ top, data }, ref) => {
	return (
		<Container ref={ref} styles={`${styles.container} ${top && styles.top}`}>
			<div className={styles.column}>
				<img
					src={`http://localhost:4444${data?.imageUrl}`}
					className={styles.photo}
					alt=''
				/>
			</div>
			<div className={styles.column}>
				<div className={styles.hashtags}>
					<List variant={'ul'} display={'flex'} mt={'5px'}>
						<ListItem style={styles.hashtag}>
							{data.tags?.map((item, i) => (
								<a key={i} href='/blog' className={styles.link}>
									#{item}
								</a>
							))}
						</ListItem>
					</List>

					{data?.createdAt && (
						<Typeography variant='span' color={'white'} fontSize={'12px'}>
							{data?.createdAt.substring(0, 10)}
						</Typeography>
					)}
				</div>
				<div className={styles.title}>
					{data?.top ? (
						<h1 className={`${styles.titled} ${top && styles.mainTitle}`}>
							<Link className={styles.titled} to={`/blog/${data?._id}`}>
								{data?.title}
							</Link>
						</h1>
					) : (
						<h2 className={`${styles.titled} ${top && styles.mainTitle}`}>
							<Link className={styles.titled} to={`/blog/${data?._id}`}>
								{data?.title}
							</Link>
						</h2>
					)}

					<div className={styles.description}>
						{top && (
							<Typeography color={'grey'}>{data?.description}</Typeography>
						)}
					</div>
				</div>
			</div>
		</Container>
	)
})
export const MBlogItem = motion(BlogItem)
