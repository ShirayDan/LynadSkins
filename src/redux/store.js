import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { postReducer } from './slices/posts'
import { currencyReducer } from './slices/currency'
import { skinsReducer } from './slices/skins'

const store = configureStore({
	reducer: {
		posts: postReducer,
		auth: authReducer,
		currency: currencyReducer,
		skins: skinsReducer,
	},
})

export default store
