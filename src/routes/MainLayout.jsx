import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BlogPage } from '../pages/BlogPage/BlogPage'
import { ChangePage } from './../pages/ChangePage'
import { Layout } from './../pages/Layout'
import { MainPage } from './../pages/MainPage'
import { MarketPage } from './../pages/MarketPage'
import { Nopage } from './../pages/Nopage'
import { PrimePage } from './../pages/PrimePage'
import { ProfilePage } from './../pages/ProfilePage'
export const MainLayout = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='market' element={<MarketPage />} />
					<Route path='trade' element={<ChangePage />} />
					<Route path='prime' element={<PrimePage />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='blog' element={<BlogPage />} />
					<Route path='*' element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
