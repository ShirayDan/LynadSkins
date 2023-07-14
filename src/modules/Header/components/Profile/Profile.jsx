import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import styles from './Profile.module.css'

import { ProfileList } from './components/ProfileList'

import { FaUserAlt } from 'react-icons/fa'
// import img from '../../../../i/flag-punisher.jpg'

export const Profile = () => {
	const [smallModal, setSmallModal] = useState(false)
	return (
		<div className={styles.icon} onClick={() => setSmallModal(!smallModal)}>
			{/* {img ? (
				<img src={img} alt='' className={styles.img} />
			) : ( */}
			<div className={styles.user}>
				<FaUserAlt color='white' />
			</div>
			{/* )} */}

			<AnimatePresence initial={false}>
				{smallModal && <ProfileList />}
			</AnimatePresence>
		</div>
	)
}
