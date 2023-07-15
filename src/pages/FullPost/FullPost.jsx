import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import axios from '../../axios'
import styles from './Fullpost.module.css'

import { Post } from '../../modules/Post'
import { Container } from '../../ui/Container'
import { AddComment } from './components/AddComment'
import { CommentBlock } from './components/CommentBlock'

export const FullPost = () => {
	const [data, setData] = useState()
	const [isLoading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`/posts/${id}`)
			.then((res) => {
				setData(res.data)
				setLoading(false)
			})
			.catch((err) => {
				console.warn(err)
				alert('Error getting post')
			})
	}, [])

	return (
		<Container styles={styles.container}>
			<Post data={data}>
				{/* data.text */}
				<ReactMarkdown children={''} />
			</Post>
			<CommentBlock
				items={[
					{
						user: {
							fullName: 'Вася Пупкин',
							avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
						},
						text: 'Это тестовый комментарий 555555',
					},
					{
						user: {
							fullName: 'Иван Иванов',
							avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
						},
						text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
					},
				]}
				isLoading={false}
			>
				<AddComment />
			</CommentBlock>
		</Container>
	)
}
