import styles from './Money.module.css'

import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'

import { FiPlus } from 'react-icons/fi'

export const Money = () => {
	return (
		<div className={styles.money}>
			<div className={styles.left}>
				<Typeography color={'white'} fontSize={'14px'}>
					$100.00
				</Typeography>
				<Typeography color={'white'} fontSize={'10px'}>
					~ {'$3670.00'}
				</Typeography>
			</div>
			<Button
				text={<FiPlus fontSize={'20px'} />}
				hover={true}
				style={styles.btn}
			></Button>
		</div>
	)
}
