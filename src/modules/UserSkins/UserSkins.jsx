import { Item } from '../../components/Item/Item'
import { SkeletonItem } from '../../components/SkeletonItem'
import img1 from './../../i/1.webp'
import img2 from './../../i/2.webp'
import styles from './UserSkins.module.css'
let data = [
	{
		id: 1,
		item: 'AK-47',
		skin: 'Elite Build',
		img: img1,
		exterior: 'Field-Tested',
		rarity: 'Mil-Spec Grade',
		price: 13.3,
		float: 0.210546776,
		statTrak: true,
		souvenir: false,
		type: 'Assault Rifles',
		color: ['black'],
	},
	{
		id: 2,
		item: 'AK-47',
		skin: 'Asiimov',
		img: img2,
		exterior: 'Field-Tested',
		rarity: 'Covert',
		price: 38.24,
		float: 0.1743020377,
		statTrak: false,
		souvenir: false,
		type: 'Assault Rifles',
		color: ['red', 'white'],
	},
]

export const UserSkins = () => {
	const page = window.location.href.match('/trade')

	return (
		<div
			className={`${styles['main-container']} ${
				page && styles['main-container_profile']
			}`}
		>
			<div className={styles.conitaner}>
				{(data ? data : [...Array(20)]).map((item, i) => {
					return data ? <Item key={i} data={item} /> : <SkeletonItem key={i} />
				})}
			</div>
		</div>
	)
}
