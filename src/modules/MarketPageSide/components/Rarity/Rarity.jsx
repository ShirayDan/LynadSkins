import { useTranslation } from 'react-i18next'
import styles from './Rarity.module.css'

import { SideItem } from '../../../../components/SideItem'
import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'

export const Rarity = () => {
	const { t, i18n } = useTranslation()
	const items = [
		{ text: t('consumer_grade'), value: 'consumer_grade' },
		{ text: t('industrial_grade'), value: 'industrial_grade' },
		{ text: t('milSpec_grade'), value: 'milSpec_grade' },
		{ text: t('restricted'), value: 'restricted' },
		{ text: t('classified'), value: 'classified' },
		{ text: t('covert'), value: 'covert' },
	]
	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<List>
				{items.map((item, i) => {
					return <SideItem key={i} text={item.text} value={item.value} />
				})}
			</List>
		</MContainer>
	)
}
