import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setFilters } from '../../redux/slices/filters'
import styles from './MarketPageSide.module.css'

import { Color } from './components/Color'
import { Exterior } from './components/Exterior'
import { Float } from './components/Float'
import { Other } from './components/Other'
import { Price } from './components/Price'
import { Rarity } from './components/Rarity'
import { Type } from './components/Type'
import { FilterItem } from './components/FilterItem'
import { Button } from '../../ui/Button'
import { Container } from '../../ui/Container/Container'
import { Typeography } from '../../ui/Typeography'

export const MarketPageSide = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const filters = [
		{ text: t('price'), comp: <Price /> },
		{ text: t('type'), comp: <Type /> },
		{ text: t('exteriror'), comp: <Exterior /> },
		{ text: t('colour'), comp: <Color /> },
		{ text: t('float'), comp: <Float /> },
		{ text: t('rarity'), comp: <Rarity /> },
		{ text: t('other'), comp: <Other /> },
	]

	const handleResetFilters = () => {
		dispatch(
			setFilters({
				itemName: null,
				skinName: null,
				exterior: null,
				rarity: null,
				type: null,
				statTrak: null,
				souvenir: null,
				price: null,
				float: null,
				color: null,
			})
		)
	}
	return (
		<Container styles={styles.container}>
			<Typeography variant={'h2'} fontSize={'24px'} color={'white'}>
				{t('filters')}
			</Typeography>
			<div className={styles.filters}>
				{filters.map((item, i) => (
					<FilterItem key={i} filter={item.text} fullList={item.comp} />
				))}
				<div className={styles.btns}>
					<Button
						hover={true}
						text={t('reset')}
						onClick={handleResetFilters}></Button>
					<Button hover={true} text={t('save')}></Button>
				</div>
			</div>
		</Container>
	)
}
