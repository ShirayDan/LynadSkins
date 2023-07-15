import React from 'react'
import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

import { FaCommentAlt, FaEye, FaUserAlt } from 'react-icons/fa'

import styles from './Post.module.css'
export const Post = ({ data }) => {
	// const dispatch = useDispatch()
	// if (isLoading) {
	// 	return <PostSkeleton />
	// }

	// const onClickRemove = () => {
	// 	if (window.confirm('You really want to delete post?')) {
	// 		dispatch(fetchRemovePost(id))
	// 	}
	// }

	return (
		<Container styles={styles.container}>
			<img
				src={`http://localhost:4444${data?.imageUrl}`}
				alt=''
				className={styles.postImage}
			/>
			<div className={styles.wrapper}>
				<div className={styles.userInfo}>
					<div className={styles.user}>
						<FaUserAlt color='white' />
					</div>
					<div className={styles.userDetails}>
						<span className={styles.userName}>{data?.user.fullName}</span>
						<span className={styles.additional}>{data?.createdAt}</span>
					</div>
				</div>
				<div className={styles.postContainer}>
					<Typeography
						color={'white'}
						variant={'h1'}
						fontSize={'32px'}
						fontWeight={800}
					>
						{data?.title}
					</Typeography>
					<List variant={'ul'} display={'flex'} mt={'5px'}>
						<ListItem style={styles.hashtag}>
							{data?.tags.map((item, i) => (
								<a key={i} href='/' className={styles.link}>
									#{item}
								</a>
							))}
						</ListItem>
					</List>
					<div className={styles.postContent}>
						<Typeography color={'white'}>{data?.text}</Typeography>
					</div>
					<List m={'20px 0 0 0'} display={'flex'}>
						<ListItem style={styles.icon}>
							<FaEye fontSize={'18px'} color='' />
							<span className={styles.counter}>{data?.viewsCount}</span>
						</ListItem>
						<ListItem style={styles.icon}>
							<FaCommentAlt fontSize={'18px'} />
							<span className={styles.counter}>2</span>
						</ListItem>
					</List>
				</div>
			</div>
		</Container>
	)
}
