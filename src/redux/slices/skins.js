import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

// export const fetchAllSkins = createAsyncThunk(
// 	'skins/fetchAllSkins',
// 	async () => {
// 		const { data } = await axios.get('/skins')
// 		return data
// 	}
// )

// если не передавать объект после запятой то получаем все скины если передать объект то не получим скины этого пользователя

export const fetchAllSkins = createAsyncThunk(
	'skins/fetchAllSkins',
	async (userId) => {
		const { data } = await axios.post('/Nskins', {
			user: userId,
		})

		return data
	}
)

export const fetchUserSkins = createAsyncThunk(
	'skins/fetchUserSkins',
	async () => {
		const { data } = await axios.get('/myskins')
		return data
	}
)

export const createSkin = createAsyncThunk(
	'skins/createSkin',
	async (params) => {
		const { data } = await axios.post('/skins', params)
		return data
	}
)

export const updateSkin = createAsyncThunk(
	'skins/updateSkin',
	async (params) => {
		const { data } = await axios.patch(`/skins/${params._id}`, params)
		return data
	}
)

const initialState = {
	skins: {
		items: [],
		status: 'loading',
	},
}

const skinsSlice = createSlice({
	name: 'skins',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAllSkins.pending]: (state) => {
			state.status = 'loading'
			state.data = null
		},
		[fetchAllSkins.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[fetchAllSkins.rejected]: (state) => {
			state.status = 'error'
			state.data = null
		},
		[fetchUserSkins.pending]: (state) => {
			state.status = 'loading'
			state.data = null
		},
		[fetchUserSkins.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[fetchUserSkins.rejected]: (state) => {
			state.status = 'error'
			state.data = null
		},
		[createSkin.pending]: (state) => {
			state.status = 'loading'
			state.data = null
		},
		[createSkin.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[createSkin.rejected]: (state) => {
			state.status = 'error'
			state.data = null
		},
		[updateSkin.pending]: (state) => {
			state.status = 'loading'
			state.data = null
		},
		[updateSkin.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[updateSkin.rejected]: (state) => {
			state.status = 'error'
			state.data = null
		},
	},
})

export const skinsReducer = skinsSlice.reducer
