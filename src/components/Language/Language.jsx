import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from './Language.module.css'

import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

import { FaChevronDown } from 'react-icons/fa'
import ua from './../../i/icons/ua.svg'
import usa from './../../i/icons/usa.svg'

export const Language = ({ langFunc }) => {
	const [languageOpen, setlanguageOpen] = useState(false)

	const openModal = (val, setVal) => {
		setVal(!val)
	}
	return (
		<div className={styles['lang-cont']}>
			<div onClick={() => openModal(languageOpen, setlanguageOpen)}>
				<Typeography color={'white'} hover={true} icon={true}>
					Language
					<span
						className={
							languageOpen
								? `${styles.icon} ${styles['icon-opened']}`
								: styles.icon
						}
					>
						<FaChevronDown fontSize={'16px'} />
					</span>
				</Typeography>
			</div>
			<AnimatePresence initial={false}>
				{languageOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.language}
					>
						<List variant={'ul'}>
							<ListItem
								onClick={() => langFunc.changeLanguage('en')}
								style={styles.item}
							>
								<img src={usa} alt='' className={styles.img} />
								English
							</ListItem>
							<ListItem
								onClick={() => langFunc.changeLanguage('ua')}
								style={styles.item}
							>
								<img src={ua} alt='' className={styles.img} />
								Ukrainian
							</ListItem>
						</List>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
