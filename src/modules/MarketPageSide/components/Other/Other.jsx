import styles from './Other.module.css'

import { SideItem } from '../../../../components/SideItem'
import { MContainer } from '../../../../ui/Container'
import { List } from '../../../../ui/List'
export const Other = () => {
	const items = [
		{ text: 'StatTrack', value: 'StatTrack' },
		{ text: 'Souvenir', value: 'Souvenir' },
	]
	return (
		<MContainer
			styles={styles.typeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<List variant={'ul'}>
				{items.map((item, i) => {
					return <SideItem text={item.text} value={item.value} />
				})}
			</List>
		</MContainer>
	)
}
