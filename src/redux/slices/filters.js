import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		updated: false,
		filters: {
			itemName: '',
			skinName: '',
			exterior: '',
			rarity: '',
			type: '',
			statTrak: '',
			souvenir: '',
			price: '',
			float: '',
			color: '',
		},
	},
	reducers: {
		setFilters: (state, action) => {
			state.filters = action.payload
		},
		resetFilters: (state) => {
			state.filters = {
				itemName: '',
				skinName: '',
				exterior: '',
				rarity: '',
				type: '',
				statTrak: '',
				souvenir: '',
				price: '',
				float: '',
				color: '',
			}
		},
	},
})
export const { setFilters, resetFilters } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
