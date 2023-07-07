import React from 'react'
import { Container } from '../../ui/Container'
import styles from './Nopage.module.css'
import { ErrorMessage } from './components/ErrorMessage'
export const Nopage = () => {
	return (
		<Container styles={styles.container}>
			<ErrorMessage></ErrorMessage>
		</Container>
	)
}
