import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllSkins } from '../../redux/slices/skins'

import { Item } from '../../components/Item'
import { SkeletonItem } from '../../components/SkeletonItem'

import styles from './MarketPageItems.module.css'

export const MarketPageItems = () => {
	const [skins, setSkins] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllSkins()).then((res) => {
			setSkins(res.payload)
		})
	}, [])

	return (
		<div className={styles['main-container']}>
			<div className={styles.conitaner}>
				{(skins ? skins : [...Array(20)]).map((item, i) => {
					return skins ? <Item key={i} data={item} /> : <SkeletonItem key={i} />
				})}
			</div>
		</div>
	)
}
