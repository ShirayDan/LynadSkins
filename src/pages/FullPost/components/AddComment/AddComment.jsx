import React from 'react'
import styles from './AddComment.module.css'

import { Button } from '../../../../ui/Button'
import { Container } from '../../../../ui/Container'

import img from '../../../../i/flag-punisher.jpg'

export const AddComment = () => {
	return (
		<Container styles={styles.addComment}>
			<img src={img} alt='' className={styles.userPhoto} />
			<div className={styles.textBox}>
				<textarea
					className={styles.textarea}
					placeholder='Написать комментарий'
				></textarea>
				<Button text={'Send'} hover={true} style={styles.btn}></Button>
			</div>
		</Container>
	)
}
