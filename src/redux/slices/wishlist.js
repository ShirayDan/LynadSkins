import { createSlice } from '@reduxjs/toolkit'

const wishListSlice = createSlice({
	name: 'wishlist',
	initialState: [],
	reducers: {
		addWishList: (state, action) => {
			const index = state.findIndex((item) => item._id === action.payload._id)
			if (index === -1) {
				state.push(action.payload)
			}
		},
		resetWishList: (state) => {
			state.length = 0
		},
		removeWishItem: (state, action) => {
			const index = state.findIndex((item) => item._id === action.payload)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
	},
})

export const { addWishList, resetWishList, removeWishItem } =
	wishListSlice.actions
export const wishListReducer = wishListSlice.reducer
