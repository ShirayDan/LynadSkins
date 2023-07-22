import { useContext } from 'react'
import { CarouselContext } from '../carousel'
import styles from './Page.module.css'

export const Page = ({ children }) => {
	const { width } = useContext(CarouselContext)
	return (
		<div
			className={styles['page__main-container']}
			style={{
				minWidth: `${width}px`,
				maxWidth: `${width}px`,
			}}>
			{children}
		</div>
	)
}
