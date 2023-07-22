import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './MarketPageFilters.module.css'

import { Modal } from '../../components/Modal'
import { ModalSmall } from '../../components/ModalSmall'
import { changeOverflow } from '../../helpers/helpers'
import { Input } from '../../ui/Input'
import { List } from '../../ui/List'
import { ListItem } from '../../ui/ListItem'
import { Cart } from './components/Cart'
import { FilterPhones } from './components/FilterPhones'
import { Search } from './components/Search'

import {
	FaAngleDown,
	FaFilter,
	FaHeart,
	FaSearch,
	FaShoppingCart,
} from 'react-icons/fa'

export const MarketPageFilters = () => {
	const { t, i18n } = useTranslation()
	const [open, setOpen] = useState(false)
	const [filter, setFilter] = useState(t('sorting_newest'))
	const [moreFilters, setMoreFilters] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)
	const [search, setSearch] = useState(false)
	const [favOpen, setFavOpen] = useState(false)
	const cart = useSelector((state) => state.cart)

	const showAll = () => {
		setOpen(!open)
	}

	const handleClick = () => {
		setMoreFilters(!moreFilters)
		changeOverflow(moreFilters)
	}

	const openCartMenu = () => {
		setCartOpen(!cartOpen)
		if (window.innerWidth < 1050) {
			changeOverflow(cartOpen)
		}
	}

	const openFavMenu = () => {
		// setFavOpen(!favOpen);
		// if (window.innerWidth < 1050) {
		//   changeOverflow(cartOpen);
		// }
	}
	const filterModalClick = (text) => {
		setOpen(false)
		setFilter(text)
	}

	const searchModalClick = (text) => {
		setSearch(!search)
		changeOverflow(search)
	}

	const filterParams = [
		t('sorting_newest'),
		t('sorting_price_low'),
		t('sorting_price_high'),
		t('sorting_float_low'),
		t('sorting_float_high'),
	]

	return (
		<div className={styles.filters}>
			<div className={styles['filter-top']}>
				<div className={styles.input}>
					<Input width={'100%'} />
					<motion.div
						whileTap={{ scale: 0.8 }}
						className={styles['search-btn']}>
						<div className={styles['icon-search']}>
							<FaSearch fontSize={'15px'} fill='white' />
						</div>
					</motion.div>
				</div>
			</div>
			<div className={styles['filter-bottom']}>
				<div className={styles['filter-left']}>
					<motion.div
						whileTap={{ scale: 0.8 }}
						className={styles.fav}
						onClick={() => openFavMenu()}>
						<div className={styles['icon-heart']}>
							<FaHeart fontSize={'15px'} fill='white' />
						</div>
					</motion.div>
					<div className={styles['filter-box']} onClick={showAll}>
						{filter}
						<div
							className={
								open ? `${styles.icon} ${styles['icon-opened']}` : styles.icon
							}>
							<FaAngleDown fontSize={'25px'} />
						</div>
						{open && (
							<div className={styles['filters-container']}>
								<List variant={'ul'}>
									{filterParams.map((item, i) => {
										return (
											<ListItem
												key={i}
												style={styles.item}
												onClick={() => filterModalClick(item)}>
												{item}
											</ListItem>
										)
									})}
								</List>
							</div>
						)}
					</div>
				</div>
				<div className={styles['filter-right']}>
					<motion.div
						whileTap={{ scale: 0.8 }}
						className={styles.search}
						onClick={() => searchModalClick()}>
						<div className={styles['icon-search']}>
							<FaSearch fontSize={'15px'} fill='white' />
						</div>
					</motion.div>

					<motion.div
						whileTap={{ scale: 0.8 }}
						className={styles.cart}
						onClick={() => openCartMenu()}>
						<div className={styles['icon-cart']}>
							<FaShoppingCart fontSize={'15px'} fill='white' />
							{cart.length > 0 && (
								<div className={styles['icon-cart__number']}>{cart.length}</div>
							)}
						</div>
					</motion.div>

					<motion.div
						whileTap={{ scale: 0.8 }}
						className={styles['icon-filters']}
						onClick={() => handleClick()}>
						<FaFilter fontSize={'15px'} fill='white' />
					</motion.div>
				</div>
			</div>
			<AnimatePresence initial={false}>
				{moreFilters && (
					<Modal
						handleClick={() => handleClick()}
						children={<FilterPhones />}
						guns={true}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence initial={false}>
				{cartOpen && (
					<ModalSmall handleClick={() => openCartMenu()} children={<Cart />} />
				)}
			</AnimatePresence>
			{/* {favOpen && (
        <ModalSmall handleClick={() => openFavMenu()} children={<Fav />} />
      )} */}
			<AnimatePresence initial={false}>
				{search && (
					<Modal
						handleClick={() => searchModalClick()}
						children={<Search />}
						guns={true}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}
