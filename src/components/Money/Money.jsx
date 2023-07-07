import { FiPlus } from 'react-icons/fi'
import { Button } from '../../ui/Button'
import { Typeography } from '../../ui/Typeography'
import styles from './Money.module.css'

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
			<Button text={<FiPlus />} style={styles.btn}></Button>
		</div>
	)
}
