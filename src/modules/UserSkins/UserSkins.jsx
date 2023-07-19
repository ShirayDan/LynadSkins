import { useEffect, useState } from 'react'
import { Item } from '../../components/Item/Item'
import { SkeletonItem } from '../../components/SkeletonItem'
import { fetchUserSkins } from '../../redux/slices/skins'

import styles from './UserSkins.module.css'
import { useDispatch } from 'react-redux'

export const UserSkins = () => {
	const [skins, setSkins] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserSkins()).then((res) => {
			setSkins(res.payload)
		})
	}, [])
	const page = window.location.href.match('/trade')

	return (
		<div
			className={`${styles['main-container']} ${
				page && styles['main-container_profile']
			}`}
		>
			<div className={styles.conitaner}>
				{(skins ? skins : [...Array(20)]).map((item, i) => {
					return skins ? <Item key={i} data={item} /> : <SkeletonItem key={i} />
				})}
			</div>
		</div>
	)
}
