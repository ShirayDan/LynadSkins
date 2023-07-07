import React from 'react'
import styles from './SmallModalEmpty.module.css'

import { Container } from '../../ui/Container'
import { Typeography } from '../../ui/Typeography'

export const SmallModalEmpty = ({ message, desc }) => {
	return (
		<Container styles={styles.container}>
			<Typeography variant={'h3'} color={'white'} m={'0px 0px 10px 0'}>
				{message}
			</Typeography>
			<Typeography color={'white'}>{desc}</Typeography>
		</Container>
	)
}
