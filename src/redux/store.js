import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { postReducer } from './slices/posts'
import { currencyReducer } from './slices/currency'

const store = configureStore({
	reducer: {
		posts: postReducer,
		auth: authReducer,
		currency: currencyReducer,
	},
})

export default store
