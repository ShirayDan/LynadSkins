import React from 'react'
import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

import { FaCommentAlt, FaEye } from 'react-icons/fa'

import img from '../../i/flag-punisher.jpg'
import postImg from '../../i/hotskins_eng-768x432.png'

import styles from './Post.module.css'
export const Post = ({
	id,
	title,
	createdAt,
	imageUrl,
	user,
	viewsCount,
	commentsCount,
	tags,
	children,
	isFullPost,
	isLoading,
	isEditable,
}) => {
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
			<img src={postImg} alt='' className={styles.postImage} />
			<div className={styles.wrapper}>
				<div className={styles.userInfo}>
					<img src={img} alt='' className={styles.userPhoto} />
					<div className={styles.userDetails}>
						<span className={styles.userName}>Danil</span>
						<span className={styles.additional}>2023-07-05T15:17:38.470Z</span>
					</div>
				</div>
				<div className={styles.postContainer}>
					<Typeography
						color={'white'}
						variant={'h2'}
						fontSize={'32px'}
						fontWeight={800}
					>
						Post cerated from app
						{/* {isFullPost ? (
								title
							) : (
								<Link to={`/posts/${id}`}>{title}</Link>
							)} */}
					</Typeography>
					{/* {children && <div className={styles.content}>{children}</div>} */}
					<List variant={'ul'} display={'flex'} mt={'5px'}>
						<ListItem style={styles.hashtag}>
							<a href='/' className={styles.link}>
								#react
							</a>
						</ListItem>
					</List>
					<div className={styles.postContent}>
						<Typeography color={'white'}>Post cerated from app 1</Typeography>
					</div>
					<List m={'20px 0 0 0'} display={'flex'}>
						<ListItem style={styles.icon}>
							<FaEye fontSize={'18px'} color='' />
							<span className={styles.counter}>100</span>
						</ListItem>
						<ListItem style={styles.icon}>
							<FaCommentAlt fontSize={'18px'} />
							<span className={styles.counter}>100</span>
						</ListItem>
					</List>
				</div>
			</div>
		</Container>
	)
}
