import styles from './ItemModal.module.css'

import { Button } from '../../ui/Button'
import { Container } from '../../ui/Container'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Typeography } from '../../ui/Typeography'

import { FaHeart } from 'react-icons/fa'

export const ItemModal = ({
	img,
	souvenir,
	statTrak,
	item,
	skin,
	exterior,
	price,
	float,
}) => {
	return (
		<Container styles={styles.container}>
			<div className={styles['modal-container']}>
				<img src={img} alt='' className={styles['modal-image']} />
			</div>
			<div className={styles['modal-right']}>
				<Typeography fontSize={'16px'} variant={'h3'} color={'white'}>
					<Typeography fontSize={'16px'} variant={'span'} color={'gold'}>{`${
						souvenir == true ? 'SV ' : ''
					}`}</Typeography>
					<Typeography variant={'span'} fontSize={'16px'}>{`${
						souvenir == true && statTrak == true ? '/ ' : ''
					}`}</Typeography>
					<Typeography variant={'span'} fontSize={'16px'} color={'orange'}>{`${
						statTrak == true ? 'ST ' : ''
					}`}</Typeography>
					{item}
				</Typeography>
				<Typeography variant={'h3'} color={'white'}>
					{skin} ({exterior})
				</Typeography>
				<div className={styles['modal-info']}>
					<div className={styles['modal-line']}>
						<div className={styles['modal-blue']}></div>
						<div className={styles['modal-green']}></div>
						<div className={styles['modal-yellow']}></div>
						<div className={styles['modal-orange']}></div>
						<div className={styles['modal-red']}></div>
						<div
							style={{
								position: 'absolute',
								top: '-7px',
								marginLeft: '-7px',
								left: `calc(${float} * 100%)`,
								border: '7px solid transparent',
								borderTop: '7px solid #fff',
							}}
						></div>
					</div>
					<List mt={'15px'}>
						<ListItem
							display={'flex'}
							justifyContent={'space-between'}
							m={'10px 0 0 0'}
						>
							<Typeography variant={'span'} color={'white'}>
								Float
							</Typeography>
							<Typeography variant={'span'} color={'white'}>
								{float}
							</Typeography>
						</ListItem>
						<ListItem
							display={'flex'}
							justifyContent={'space-between'}
							m={'10px 0 0 0'}
						>
							<Typeography variant={'span'} color={'white'}>
								Rarity
							</Typeography>
							<Typeography variant={'span'} color={'white'}>
								-
							</Typeography>
						</ListItem>
					</List>
				</div>
				<div className={styles['modal-price']}>
					<Typeography color={'white'}>Price</Typeography>
					<Typeography color={'white'}>{`$ ${price.toFixed(2)}`}</Typeography>
				</div>
				<div className={styles['modal-buttons']}>
					<Button
						hover={true}
						text={'ADD TO CART'}
						style={styles['modal-cart']}
					></Button>
					<Button
						hover={true}
						text={<FaHeart fontSize={'30px'} />}
						style={styles['modal-like']}
					></Button>
				</div>
			</div>
		</Container>
	)
}
