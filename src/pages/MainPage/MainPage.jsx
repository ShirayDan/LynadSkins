import React from 'react'
import { Advantage } from './components/Advantage'
import { AdvantagesSlider } from './components/AdvantagesSlider'
import { MainPageTop } from './components/MainPageTop'
import { PopularItems } from './components/PopularItems'
export const MainPage = () => {
	return (
		<>
			<MainPageTop />
			<Advantage />
			<PopularItems />
			<AdvantagesSlider />
		</>
	)
}
