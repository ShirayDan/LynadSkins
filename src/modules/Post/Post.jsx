import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRemovePost } from '../../redux/slices/posts'
import { useNavigate } from 'react-router-dom'
import styles from './Post.module.css'

import { FaCommentAlt, FaEye, FaUserAlt, FaEdit, FaTrash } from 'react-icons/fa'

import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

export const Post = ({ data }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userData = useSelector((state) => state.auth.data)
	const onClickRemove = () => {
		if (window.confirm('You really want to delete post?')) {
			dispatch(fetchRemovePost(data._id))
		}
		navigate('/blog')
	}

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
					<div className={styles.info}>
						<div className={styles.userDetails}>
							<span className={styles.userName}>{data?.user.fullName}</span>
							<span className={styles.additional}>
								{data?.createdAt.substring(0, 10)}
							</span>
						</div>
						{userData?._id == data?.user._id && (
							<div>
								<FaEdit fill='var(--text-primary)' className={styles.edit} />
								<FaTrash
									fill='var(--text-primary)'
									onClick={onClickRemove}
									className={styles.remove}
								/>
							</div>
						)}
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
							<FaEye fontSize={'18px'} />
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
