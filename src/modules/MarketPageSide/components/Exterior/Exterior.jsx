import { useTranslation } from 'react-i18next'
import styles from './Exterior.module.css'

import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'
import { SideItem } from './../../../../components/SideItem'

export const Exterior = () => {
	const { t, i18n } = useTranslation()
	const items = [
		{ text: t('factory_new'), value: 'factory-new' },
		{ text: t('minimal_wear'), value: 'minimal_wear' },
		{ text: t('field_tested'), value: 'field_tested' },
		{ text: t('well_worn'), value: 'well_worn' },
		{ text: t('battle_scarred'), value: 'battle_scarred' },
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
					return <SideItem text={item.text} value={item.value} />
				})}
			</List>
		</MContainer>
	)
}
