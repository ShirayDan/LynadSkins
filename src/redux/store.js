import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { postReducer } from './slices/posts'
import { currencyReducer } from './slices/currency'
import { skinsReducer } from './slices/skins'
import { cartReducer } from './slices/cart'

const store = configureStore({
	reducer: {
		posts: postReducer,
		auth: authReducer,
		currency: currencyReducer,
		skins: skinsReducer,
		cart: cartReducer,
	},
})

export default store
