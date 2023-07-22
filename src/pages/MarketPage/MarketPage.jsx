import React from 'react'
import { useSelector } from 'react-redux'
import styles from './MarketPage.module.css'

import { MarketPageFilters } from '../../modules/MarketPageFilters'
import { MarketPageItems } from '../../modules/MarketPageItems'
import { MarketPageSide } from '../../modules/MarketPageSide'
import { Container } from '../../ui/Container'

export const MarketPage = () => {
	const state = useSelector((store) => store.marketItems)
	return (
		<>
			<Container styles={styles.container}>
				<div className={styles.sideBar}>
					<MarketPageSide />
				</div>
				<div>
					<MarketPageFilters />
					<MarketPageItems update={state} />
				</div>
			</Container>
		</>
	)
}
