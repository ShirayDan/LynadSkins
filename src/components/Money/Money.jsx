import styles from './Money.module.css'
import { useSelector } from 'react-redux'

import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'

import { FiPlus } from 'react-icons/fi'

export const Money = ({ data }) => {
	const currency = useSelector((state) => state.currency)

	return (
		<div className={styles.money}>
			<div className={styles.left}>
				<Typeography color={'white'} fontSize={'14px'}>
					{data?.money + ' $'}
				</Typeography>
				{currency.currency == 'uah' && (
					<Typeography color={'white'} fontSize={'10px'}>
						~ {(data?.money * 36.7).toFixed(2) + ' ₴'}
					</Typeography>
				)}
			</div>
			<Button
				text={<FiPlus fontSize={'20px'} />}
				hover={true}
				style={styles.btn}
			></Button>
		</div>
	)
}
