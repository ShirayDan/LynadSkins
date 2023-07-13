import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './AddComment.module.css'

import { Button } from '../../../../ui/Button'
import { Container } from '../../../../ui/Container'

import img from '../../../../i/flag-punisher.jpg'

export const AddComment = () => {
	const { t } = useTranslation()
	return (
		<Container styles={styles.addComment}>
			<img src={img} alt='' className={styles.userPhoto} />
			<div className={styles.textBox}>
				<textarea className={styles.textarea} placeholder=''></textarea>
				<Button
					text={t('blog.publish')}
					hover={true}
					style={styles.btn}
				></Button>
			</div>
		</Container>
	)
}
