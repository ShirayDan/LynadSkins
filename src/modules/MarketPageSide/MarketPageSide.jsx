import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../../ui/Button'
import { Container } from '../../ui/Container/Container'
import { Typeography } from '../../ui/Typeography'
import styles from './MarketPageSide.module.css'
import { Color } from './components/Color'
import { Exterior } from './components/Exterior'
import { Float } from './components/Float'
import { Other } from './components/Other'
import { Price } from './components/Price'
import { Rarity } from './components/Rarity'
import { Type } from './components/Type'
import { FilterItem } from './components/FilterItem'

export const MarketPageSide = () => {
	const { t } = useTranslation()

	const filters = [
		{ text: t('price'), comp: <Price /> },
		{ text: t('type'), comp: <Type /> },
		{ text: t('exteriror'), comp: <Exterior /> },
		{ text: t('colour'), comp: <Color /> },
		{ text: t('float'), comp: <Float /> },
		{ text: t('rarity'), comp: <Rarity /> },
		{ text: t('other'), comp: <Other /> },
	]

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
					<Button hover={true} text={t('reset')}></Button>
					<Button hover={true} text={t('save')}></Button>
				</div>
			</div>
		</Container>
	)
}
