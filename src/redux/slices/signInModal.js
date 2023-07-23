import { createSlice } from '@reduxjs/toolkit'

const signInModalSlice = createSlice({
	name: 'signInModal',
	initialState: {
		state: false,
	},
	reducers: {
		setSignInState: (state, action) => {
			state.state = action.payload
		},
	},
})

export const { setSignInState } = signInModalSlice.actions
export const signInModaReducer = signInModalSlice.reducer
