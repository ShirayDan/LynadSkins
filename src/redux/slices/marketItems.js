import { createSlice } from '@reduxjs/toolkit'

const marketItemsSlice = createSlice({
	name: 'marketItems',
	initialState: {
		state: false,
	},
	reducers: {
		setState: (state, action) => {
			state.state = action.payload
		},
	},
})

export const { setState } = marketItemsSlice.actions
export const marketItemsReducer = marketItemsSlice.reducer
