import { createSlice } from '@reduxjs/toolkit'
import { decode } from '../../helpers/helpers'

const changeSlice = createSlice({
	name: 'change',
	initialState: {
		marketItems: [],
		yourItems: [],
	},
	reducers: {
		addChange: (state, action) => {
			const token = localStorage.getItem('token')
			const userId = decode(token).payload._id
			if (action.payload.user === userId) {
				state.yourItems.push(action.payload)
			} else {
				state.marketItems.push(action.payload)
			}
		},
		removeChange: (state, action) => {
			const index = state.marketItems.findIndex(
				(item) => item._id === action.payload
			)
			if (index !== -1) {
				state.marketItems.splice(index, 1)
			} else {
				const ind = state.marketItems.findIndex(
					(item) => item._id === action.payload
				)
				state.yourItems.splice(ind, 1)
			}
		},
		resetChange: (state) => {
			state.marketItems = []
			state.yourItems = []
		},
	},
})
export const { addChange, removeChange, resetChange } = changeSlice.actions
export const changeReducer = changeSlice.reducer
