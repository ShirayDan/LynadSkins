import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import styles from './Profile.module.css'

import { ProfileList } from './components/ProfileList'

import img from '../../../../i/flag-punisher.jpg'

export const Profile = () => {
	const [smallModal, setSmallModal] = useState(false)
	return (
		<div className={styles.icon} onClick={() => setSmallModal(!smallModal)}>
			<img src={img} alt='' className={styles.img} />
			<AnimatePresence initial={false}>
				{smallModal && <ProfileList />}
			</AnimatePresence>
		</div>
	)
}
