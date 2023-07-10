import { Item } from '../../components/Item/Item'
import img1 from './../../i/1.webp'
import img2 from './../../i/2.webp'
import styles from './UserSkins.module.css'
const data = [
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
				{data.map((item, i) => {
					return (
						<Item
							key={i}
							img={item.img}
							exterior={item.exterior}
							price={item.price}
							float={item.float}
							statTrak={item.statTrak}
							souvenir={item.souvenir}
							item={item.item}
							skin={item.skin}
						/>
					)
				})}
			</div>
		</div>
	)
}
