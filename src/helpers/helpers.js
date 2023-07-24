export const changeOverflow = (val) => {
	if (val == false) {
		document.querySelector('html').style.overflowY = 'hidden'
	} else {
		document.querySelector('html').style.overflowY = 'scroll'
	}
}

export const decode = (token) => {
	const [header, payload, signature] = token.split('.')
	const decodedHeader = JSON.parse(atob(header))
	const decodedPayload = JSON.parse(atob(payload))

	return {
		header: decodedHeader,
		payload: decodedPayload,
		signature: signature,
	}
}
