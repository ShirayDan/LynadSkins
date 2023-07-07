import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
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

export const MarketPageSide = () => {
	const { t } = useTranslation()
	const FilterItem = ({ filter, fullList }) => {
		const [open, setOpen] = useState(false)
		const showAll = () => {
			setOpen(!open)
		}
		return (
			<>
				<div className={styles['filter-item']} onClick={showAll}>
					<Typeography color={'white'} fontSize={'20px'}>
						{filter}
					</Typeography>
					<div className={styles.icon}>
						{open ? (
							<span className={styles['icon-minus']}>-</span>
						) : (
							<span className={styles['icon-plus']}>+</span>
						)}
					</div>
				</div>
				<AnimatePresence initial={false}>{open && fullList}</AnimatePresence>
			</>
		)
	}

	return (
		<Container styles={styles.container}>
			<Typeography variant={'h2'} fontSize={'24px'} color={'white'}>
				{t('filters')}
			</Typeography>
			<div className={styles.filters}>
				<FilterItem filter={t('price')} fullList={<Price />} />
				<FilterItem filter={t('type')} fullList={<Type />} />
				<FilterItem filter={t('exteriror')} fullList={<Exterior />} />
				<FilterItem filter={t('colour')} fullList={<Color />} />
				<FilterItem filter={t('float')} fullList={<Float />} />
				<FilterItem filter={t('rarity')} fullList={<Rarity />} />
				<FilterItem filter={t('other')} fullList={<Other />} />
				<div className={styles.btns}>
					<Button hover={true} text={t('reset')}></Button>
					<Button hover={true} text={t('save')}></Button>
				</div>
			</div>
		</Container>
	)
}
