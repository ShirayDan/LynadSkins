import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../../../ui/Container'
import { AdvantageItem } from './AdvantageItem/AdvantageItem'

import styles from './Advantage.module.css'
export const Advantage = () => {
	const { t } = useTranslation()
	const text = [
		{ title: '35%', text: t('advantage_one') },
		{ title: '80 K', text: t('advantage_two') },
		{ title: '30 sec', text: t('advantage_three') },
		{
			title: '24/7',
			text: t('advantage_four'),
		},
	]
	return (
		<Container styles={styles.container}>
			{text.map((item, i) => {
				return <AdvantageItem key={i} data={item} />
			})}
		</Container>
	)
}
