import React from 'react'
import styles from './SmallItem.module.css'

import { Container } from '../../ui/Container'
import { Typeography } from '../../ui/Typeography'

import { FaTrash } from 'react-icons/fa'

export const SmallItem = ({ data }) => {
	return (
		<Container>
			<div className={styles.item}>
				<div className={styles.left}>
					<img
						src={data.img}
						alt={`${data.item}-${data.skin}`}
						className={styles.photo}
					/>
					<div className={styles.description}>
						<Typeography variant={'h3'} fontSize={'12px'} color={'white'}>
							{data.item}
						</Typeography>
						<Typeography variant={'h4'} fontSize={'12px'} color={'white'}>
							{data.skin + ' (' + data.exterior + ')'}
						</Typeography>
						<Typeography fontSize={'12px'} color={'grey'}>
							<Typeography
								variant={'span'}
								color={'gold'}
								fontSize={'12px'}
							>{`${data.souvenir == true ? 'SV ' : ''}`}</Typeography>
							<Typeography variant={'span'} fontSize={'12px'}>{`${
								data.souvenir == true ? '/ ' : ''
							}`}</Typeography>
							<Typeography
								variant={'span'}
								fontSize={'12px'}
								color={'orange'}
							>{`${data.statTrak == true ? 'ST ' : ''}`}</Typeography>
							{data.statTrak == true
								? `/ ${data.exterior
										.replace(/([-])/g, ' ')
										.replace(/([a-z," "])/g, '')} / ${data.float
										.toString()
										.substring(0, 4)}`
								: `${data.exterior
										.replace(/([-])/g, ' ')
										.replace(/([a-z," "])/g, '')} / ${data.float
										.toString()
										.substring(0, 4)}`}
						</Typeography>
						<Typeography
							color={'white'}
							fontSize={'16px'}
						>{`$ ${data.price.toFixed(2)}`}</Typeography>
					</div>
				</div>

				<div className={styles.bucket}>
					<div className={styles['bucket-icon']}>
						<FaTrash fontSize={'14px'} fill='white' />
					</div>
				</div>
			</div>
		</Container>
	)
}
