import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		itemName: null,
		skinName: null,
		exterior: null,
		rarity: null,
		type: null,
		statTrak: null,
		souvenir: null,
		price: null,
		float: null,
		color: null,
	},
	reducers: {
		setFilters: (state, action) => {
			console.log(action.payload)
			state = action.payload
		},
	},
})
export const { setFilters } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
