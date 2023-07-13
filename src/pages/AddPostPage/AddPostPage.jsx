import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from '../../axios'
import styles from './AddPostPage.module.css'

import { selectIsAuth } from '../../redux/slices/auth'
import { Button } from '../../ui/Button'
import { Container } from '../../ui/Container'

export const AddPostPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const isAuth = useSelector(selectIsAuth)
	const [isLoading, setLoading] = useState(false)
	const [text, setText] = useState('')
	const [title, setTitle] = useState('')
	const [tags, setTags] = useState([])
	const [imageUrl, setImageUrl] = useState('')
	const inputFileRef = useRef(null)

	const isEditing = Boolean(id)

	const handleChangeFile = async (event) => {
		try {
			const formData = new FormData()
			const file = event.target.files[0]
			formData.append('image', file)
			const { data } = await axios.post('/upload', formData)
			setImageUrl(data.url)
		} catch (err) {
			console.warn(err)
			alert('Error adding image')
		}
	}

	const onClickRemoveImage = () => {
		setImageUrl('')
	}

	const onSubmit = async () => {
		try {
			setLoading(true)

			const fields = {
				title,
				imageUrl,
				tags,
				text,
			}

			const { data } = isEditing
				? await axios.patch(`/posts/${id}`, fields)
				: await axios.post('/posts', fields)

			const _id = isEditing ? id : data._id
			navigate(`/blog/${_id}`)
		} catch (err) {
			console.warn(err)
			alert('Error in creating post')
		}
	}

	useEffect(() => {
		if (id) {
			axios
				.get(`/posts/${id}`)
				.then(({ data }) => {
					setTitle(data.title)
					setText(data.text)
					setImageUrl(data.imageUrl)
					setTags(data.tags.join(','))
				})
				.catch((err) => {
					console.warn(err)
					alert(err)
				})
		}
	}, [])

	if (!window.localStorage.getItem('token') && !isAuth) {
		return <Navigate to='/' />
	}

	return (
		<Container styles={styles.container}>
			<Button
				text={'Download preview'}
				style={styles.btn}
				onClick={() => inputFileRef.current.click()}
			></Button>
			<input
				onChange={handleChangeFile}
				type='file'
				hidden
				ref={inputFileRef}
			/>
			{imageUrl && (
				<>
					<Button text={'Delete'} onClick={onClickRemoveImage}></Button>
					<img
						className={styles.image}
						src={`http://localhost:4444${imageUrl}`}
						alt='Uploaded'
					/>
				</>
			)}

			<input
				type='text'
				className={styles['input-title']}
				placeholder={'Enter title'}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type='text'
				className={styles['input-tags']}
				value={tags}
				onChange={(e) => setTags(e.target.value)}
				placeholder={'Enter tags'}
			/>

			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				className={styles.textarea}
				placeholder='Enter text'
			></textarea>
			<div className={styles.buttons}>
				<Button
					onClick={onSubmit}
					text={isEditing ? 'Save' : 'Publish'}
					style={styles.submit}
				></Button>
				<a href='/'>
					<Button text={'Cancel'}></Button>
				</a>
			</div>
		</Container>
	)
}
