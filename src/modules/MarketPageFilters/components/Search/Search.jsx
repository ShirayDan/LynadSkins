import React, { useState, useRef } from 'react'
import styles from './Search.module.css'
import { useSelector } from 'react-redux'

import { Container } from '../../../../ui/Container'
import { Input } from '../../../../ui/Input'
import { SmallItem } from '../../../../components/SmallItem'

export const Search = () => {
	const [search, setSearch] = useState('')
	const skins = useSelector((store) => store.skins.items)
	const skinsShow = useRef()

	const handleSearch = (e) => {
		let dspl = e.target.value ? 'block' : 'none'
		skinsShow.current.style.display = dspl
		skinsShow.current.style.width = +'px'

		setSearch(e.target.value)
	}

	return (
		<Container styles={styles.container}>
			<div className={styles.top}>
				<form onChange={(e) => handleSearch(e)} className={styles.form}>
					<Input width={'100%'} placeholder={'Search...'} />
				</form>
			</div>
			<div className={styles['skins-container']}>
				<div className={styles.skins} ref={skinsShow}>
					{skins
						?.filter((item) => {
							return search.toLowerCase() === ''
								? item
								: item.skinName.toLowerCase().includes(search)
						})
						.map((item) => {
							return <SmallItem data={item} search={false} />
						})}
				</div>
			</div>
		</Container>
	)
}
