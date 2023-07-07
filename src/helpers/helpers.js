export const changeOverflow = (val) => {
	if (val == false) {
		document.querySelector('html').style.overflowY = 'hidden'
	} else {
		document.querySelector('html').style.overflowY = 'scroll'
	}
}
