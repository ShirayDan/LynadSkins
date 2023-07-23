import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import { changeOverflow } from '../../helpers/helpers'
import { selectIsAuth } from '../../redux/slices/auth'
import styles from './Header.module.css'

import { Currency } from '../../components/Currency'
import { DarkMode } from '../../components/DarkMode'
import { Language } from '../../components/Language'
import { Modal } from '../../components/Modal/Modal'
import { Money } from '../../components/Money'
import { Button } from '../../ui/Button'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'
import { SignInModal } from '../SignInModal'
import { SignUpModal } from '../SignUpModal'
import { Burger } from './components/Burger'
import { Profile } from './components/Profile'

export const Header = ({ theme, setTheme, langFunc }) => {
	const [open, setOpen] = useState(false)
	const [signUpOpen, setSignUpOpen] = useState(false)
	const [data, setData] = useState(null)
	const isAuth = useSelector(selectIsAuth)

	const handleClick = () => {
		setOpen(!open)
		changeOverflow(open)
	}

	const openSignUpModal = () => {
		setSignUpOpen(!signUpOpen)
		changeOverflow(signUpOpen)
	}
	useEffect(() => {
		if (isAuth) {
			const token = window.localStorage.getItem('token')
			axios.get('/auth/me', token).then((res) => {
				setData(res.data)
			})
		}
	}, [isAuth])

	return (
		<div className={styles.header}>
			<nav className={styles['nav-bar']}>
				<List display={'flex'}>
					<ListItem style={styles.item}>
						{' '}
						<Link className={styles.link} to={'/'}>
							<Typeography variant={'h2'} fontSize={'20px'} color={'white'}>
								Lynad
								<Typeography
									variant={'span'}
									color={'purple'}
									fontSize={'20px'}>
									Skins
								</Typeography>
							</Typeography>
						</Link>
					</ListItem>
					<ListItem style={styles.item}>
						{' '}
						<Link className={styles.link} to={'/trade'}>
							Trade
						</Link>
					</ListItem>
					<ListItem style={styles.item}>
						{' '}
						<Link className={styles.link} to={'/market'}>
							Market
						</Link>
					</ListItem>
					<ListItem style={styles.item}>
						<Link className={styles.link} to={'/blog'}>
							Blog
						</Link>
					</ListItem>
				</List>
			</nav>

			<div className={styles.burger}>
				<Burger theme={theme} setTheme={setTheme} langFunc={langFunc} />
			</div>
			<div className={styles.left}>
				<div className={styles.btns}>
					<Currency />
					<Language langFunc={langFunc} />
				</div>
				<DarkMode theme={theme} setTheme={setTheme} />
				{isAuth && (
					<>
						<Money data={data} />
						<div className={styles.hide}>
							<Profile />
						</div>
					</>
				)}
				{!isAuth && (
					<>
						<Button
							text={'Sign up'}
							style={styles.btn}
							hover={true}
							onClick={() => openSignUpModal()}></Button>
						<Button
							text={'Sign in'}
							style={styles['btn-second']}
							hover={true}
							onClick={() => handleClick()}></Button>
					</>
				)}
				<AnimatePresence initial={false}>
					{open && (
						<Modal
							children={
								<SignInModal setState={setOpen} setOtherState={setSignUpOpen} />
							}
							handleClick={() => handleClick()}
						/>
					)}
				</AnimatePresence>
				<AnimatePresence initial={false}>
					{signUpOpen && (
						<Modal
							children={
								<SignUpModal setState={setSignUpOpen} setOtherState={setOpen} />
							}
							handleClick={() => openSignUpModal()}
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
