import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../ui/Container'
import { List } from '../../../../ui/List'
import { ListItem } from '../../../../ui/ListItem'
import { Typeography } from '../../../../ui/Typeography'
import styles from './CommentBlock.module.css'

import img from '../../../../i/flag-punisher.jpg'

export const CommentBlock = ({ children }) => {
	const { t } = useTranslation()
	return (
		<Container styles={styles.container}>
			<Typeography
				color={'white'}
				variant={'h2'}
				fontSize={'20px'}
				fontWeight={500}
			>
				{t('blog.comments')}
			</Typeography>
			<List mt={'8px'} mb={'8px'} variant={'ul'}>
				<ListItem p={'8px 0'} style={styles.comment}>
					<div className={styles.userImage}>
						<img src={img} alt='' className={styles.userPhoto} />
					</div>
					<div className={styles.userMessage}>
						<Typeography color={'white'} variant={'span'} fontSize={'16px'}>
							User 1
						</Typeography>
						<Typeography color={'white'} fontSize={'14px'}>
							Это тестовый комментарий
						</Typeography>
					</div>
				</ListItem>
				<hr className={styles.line} />
				<ListItem p={'8px 0'} style={styles.comment}>
					<div className={styles.userImage}>
						<img src={img} alt='' className={styles.userPhoto} />
					</div>
					<div className={styles.userMessage}>
						<Typeography color={'white'} variant={'span'} fontSize={'16px'}>
							User 1
						</Typeography>
						<Typeography color={'white'} fontSize={'14px'}>
							Это тестовый комментарий
						</Typeography>
					</div>
				</ListItem>
				<hr className={styles.line} />
			</List>
			{children}
		</Container>
	)
}
