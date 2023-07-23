import { useEffect, useRef, useState, Children, cloneElement } from 'react'
import { useTranslation } from 'react-i18next'
import { CarouselContext } from './carousel'
import Page from './Page'
import styles from './Carousel.module.css'

import { Typeography } from '../../../../../../ui/Typeography'
import { List } from '../../../../../../ui/List'
import { ListItem } from '../../../../../../ui/ListItem'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TRANSITION_DURATION = 300

export const Carousel = ({ children, infinite }) => {
	const [offset, setOffset] = useState(0)
	const [width, setWidth] = useState(450)
	const [pages, setPages] = useState([])
	const [page, setPage] = useState(3)
	const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
	const [transitionDuration, setTransitionDuration] = useState(300)
	const { t } = useTranslation()

	const data = [
		{
			title: t('advantage_slider.two.title'),
			text: t('advantage_slider.two.text'),
			advantages: [
				t('advantage_slider.two.advantages.one'),
				t('advantage_slider.two.advantages.two'),
				t('advantage_slider.two.advantages.three'),
			],
		},
		{
			title: t('advantage_slider.three.title'),
			text: t('advantage_slider.three.text'),
			advantages: [
				t('advantage_slider.three.advantages.one'),
				t('advantage_slider.three.advantages.two'),
			],
		},
		{
			title: t('advantage_slider.four.title'),
			text: t('advantage_slider.four.text'),
			advantages: [
				t('advantage_slider.four.advantages.one'),
				t('advantage_slider.four.advantages.two'),
				t('advantage_slider.four.advantages.three'),
			],
		},
		{
			title: t('advantage_slider.one.title'),
			text: t('advantage_slider.one.text'),
			advantages: [
				t('advantage_slider.one.advantages.one'),
				t('advantage_slider.one.advantages.two'),
			],
		},
	]

	const windowElRef = useRef()

	useEffect(() => {
		if (infinite) {
			setPages([
				cloneElement(children[Children.count(children) - 1]),
				...children,
				cloneElement(children[0]),
			])
			setClonesCount({ head: 1, tail: 1 })
			return
		}
		setPages(children)
	}, [children, infinite])

	useEffect(() => {
		const resizeHandler = () => {
			const windowElWidth = windowElRef.current.offsetWidth
			setWidth(windowElWidth)
			setOffset(-(clonesCount.head * width))
		}

		resizeHandler()
		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [clonesCount, width])

	useEffect(() => {
		if (transitionDuration === 0) {
			setTimeout(() => {
				setTransitionDuration(TRANSITION_DURATION)
			}, TRANSITION_DURATION)
		}
	}, [transitionDuration])

	useEffect(() => {
		if (!infinite) return

		if (offset === 0) {
			setTimeout(() => {
				setTransitionDuration(0)
				setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
			}, TRANSITION_DURATION)
			return
		}
		if (offset === -(width * (pages.length - 1))) {
			setTimeout(() => {
				setTransitionDuration(0)
				setOffset(-(clonesCount.head * width))
			}, TRANSITION_DURATION)
			return
		}
	}, [offset, infinite, pages, clonesCount, width])

	const handleLeftArrowClick = () => {
		setPage((cur) => (cur - 1 < 0 ? (cur = children.length - 1) : --cur))
		setOffset((currentOffset) => {
			const newOffset = currentOffset + width

			return Math.min(newOffset, 0)
		})
	}
	const handleRightArrowClick = () => {
		setPage((cur) => (cur + 1 >= children.length ? 0 : ++cur))
		setOffset((currentOffset) => {
			const newOffset = currentOffset - width
			const maxOffset = -(width * (pages.length - 1))
			return Math.max(newOffset, maxOffset)
		})
	}

	return (
		<CarouselContext.Provider value={{ width }}>
			<div className={styles.container}>
				<div className={styles['main-container']}>
					<FaChevronLeft
						fill='var(--text-primary)'
						className={styles['arrow-left']}
						onClick={handleLeftArrowClick}
					/>
					<div className={styles.window} ref={windowElRef}>
						<div
							className={styles['all-pages-container']}
							style={{
								transform: `translateX(${offset}px)`,
								transitionDuration: `${transitionDuration}ms`,
							}}>
							{pages}
						</div>
					</div>
					<FaChevronRight
						fill='var(--text-primary)'
						className={styles['arrow-right']}
						onClick={handleRightArrowClick}
					/>
				</div>
				<div className={styles.description}>
					<div className={styles.subcont}>
						<Typeography
							color={'white'}
							mt={'10px'}
							variant={'h3'}
							fontSize={'24px'}>
							{data[page].text}
						</Typeography>

						<List mt={'10px'} variant={'ul'}>
							{data[page].advantages.map((item, i) => {
								return (
									<ListItem key={i} style={styles.listItems}>
										{item}
									</ListItem>
								)
							})}
						</List>
					</div>
				</div>
			</div>
		</CarouselContext.Provider>
	)
}

Carousel.Page = Page
