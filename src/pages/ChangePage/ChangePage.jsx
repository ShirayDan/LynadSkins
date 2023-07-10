import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
import styles from './ChangePage.module.css'

import { Tab } from '../../components/Tab'
import { MarketPageFilters } from '../../modules/MarketPageFilters'
import { MarketPageItems } from '../../modules/MarketPageItems'
import { MarketPageSide } from '../../modules/MarketPageSide'
import { UserSkins } from '../../modules/UserSkins'
import { Container } from '../../ui/Container'
import { BuyBtn } from './components/BuyBtn'
import { PersonalPage } from './components/PersonalPage'

export const ChangePage = () => {
	const isAuth = useSelector(selectIsAuth)

	return (
		<>
			<Container styles={styles.container}>
				<div className={styles.tabs}>
					<BuyBtn />
					<Tab
						amount={2}
						firstTab={'Inventory'}
						secondTab={'LynadSkins'}
						firstContent={
							<div>
								<MarketPageFilters />
								{!isAuth && <PersonalPage />}
								{isAuth && <UserSkins />}
							</div>
						}
						secondContent={
							<div>
								<MarketPageFilters />
								<MarketPageItems />
							</div>
						}
					/>
				</div>
				<div className={styles.profile}>
					<MarketPageFilters />
					{!isAuth && <PersonalPage />}
					{isAuth && <UserSkins />}
				</div>
				<div className={styles.sideBar}>
					<MarketPageSide />
				</div>
				<div className={styles.items}>
					<MarketPageFilters />
					<MarketPageItems />
				</div>
			</Container>
		</>
	)
}
