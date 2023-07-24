import React from 'react'
import styles from './SmallModalInner.module.css'

import { Container } from '../../ui/Container'
import { Typeography } from '../../ui/Typeography'
import { SmallItem } from '../SmallItem'

export const SmallModalInner = ({ data, type }) => {
	return (
		<Container styles={styles.container}>
			<Typeography m={'0 0 10px 0'} fontSize={'22px'} color={'white'}>
				{type}
			</Typeography>
			<div className={styles.items}>
				{data?.map((item, i) => (
					<SmallItem key={i} data={item} type={type} />
				))}
			</div>
		</Container>
	)
}
