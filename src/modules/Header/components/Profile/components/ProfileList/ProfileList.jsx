import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout, selectIsAuth } from '../../../../../../redux/slices/auth'
import styles from './ProfileList.module.css'

import { Button } from '../../../../../../ui/Button'
import { List } from '../../../../../../ui/List'
import { ListItem } from '../../../../../../ui/ListItem'
import { Typeography } from '../../../../../../ui/Typeography'

export const ProfileList = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)

	const onClickLogout = () => {
		if (window.confirm('You really want to log out?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	if (!isAuth) {
		return <Navigate to='/' />
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.list}
		>
			<List>
				<ListItem m={'0 0 5px 0'}>
					{' '}
					<Link to={'/profile'}>
						{' '}
						<Typeography color={'white'}>Personal area</Typeography>
					</Link>
				</ListItem>
				<ListItem m={'0 0 5px 0'}>Support</ListItem>
				<ListItem>
					<Button
						onClick={onClickLogout}
						style={styles.btn}
						text={'Log out'}
					></Button>
				</ListItem>
			</List>
		</motion.div>
	)
}
