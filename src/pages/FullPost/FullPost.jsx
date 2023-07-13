import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Post } from '../../modules/Post'
import { Container } from '../../ui/Container'
import styles from './Fullpost.module.css'
import { AddComment } from './components/AddComment'
import { CommentBlock } from './components/CommentBlock'

export const FullPost = () => {
	return (
		<Container styles={styles.container}>
			<Post>
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
