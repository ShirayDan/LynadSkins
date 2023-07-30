import { useTranslation } from 'react-i18next'
import styles from './Rarity.module.css'

import { SideItem } from '../../../../components/SideItem'
import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'

export const Rarity = ({ register }) => {
	const { t } = useTranslation()
	const items = [
		{ text: t('consumer_grade'), value: 'Consumer Grade' },
		{ text: t('industrial_grade'), value: 'Industrial Grade' },
		{ text: t('milSpec_grade'), value: 'Mil-Spec Grade' },
		{ text: t('restricted'), value: 'Restricted' },
		{ text: t('classified'), value: 'Classified' },
		{ text: t('covert'), value: 'Covert' },
	]
	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<List>
				{items.map((item, i) => {
					return (
						<SideItem
							key={i}
							text={item.text}
							value={item.value}
							register={register}
							filterParam={'rarity'}
						/>
					)
				})}
			</List>
		</MContainer>
	)
}
