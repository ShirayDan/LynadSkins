import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AddPostPage } from '../pages/AddPostPage'
import { BlogPage } from '../pages/BlogPage/BlogPage'
import { ChangePage } from './../pages/ChangePage'
import { FullPost } from './../pages/FullPost'
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
					<Route path='blog/:id' element={<FullPost />} />
					<Route path='blog/:id/edit' element={<AddPostPage />} />
					<Route path='/add-post' element={<AddPostPage />} />
					<Route path='*' element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
