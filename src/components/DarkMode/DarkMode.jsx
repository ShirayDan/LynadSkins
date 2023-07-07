import React, { useEffect, useState } from 'react'
import { ReactComponent as Moon } from '../../i/Moon.svg'
import { ReactComponent as Sun } from '../../i/Sun.svg'
import './DarkMode.css'

export const DarkMode = ({ theme, setTheme }) => {
	const [isDark, setIsDark] = useState(true)

	useEffect(() => {
		theme == 'light' ? setIsDark(false) : setIsDark(true)
	}, [theme])

	const switchTheme = () => {
		setTheme(theme == 'light' ? 'dark' : 'light')
		setIsDark(!isDark)
	}

	return (
		<div className='wrapper'>
			<input
				className={'dark_mode_input'}
				type='checkbox'
				id='darkmode-toggle'
				checked={isDark}
				onChange={() => switchTheme()}
			/>
			<label className={'dark_mode_label'} htmlFor='darkmode-toggle'>
				<Moon />
				<Sun />
			</label>
		</div>
	)
}
