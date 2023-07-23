import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { postReducer } from './slices/posts'
import { currencyReducer } from './slices/currency'
import { skinsReducer } from './slices/skins'
import { cartReducer } from './slices/cart'
import { marketItemsReducer } from './slices/marketItems'
import { signInModaReducer } from './slices/signInModal'

const store = configureStore({
	reducer: {
		posts: postReducer,
		auth: authReducer,
		currency: currencyReducer,
		skins: skinsReducer,
		cart: cartReducer,
		marketItems: marketItemsReducer,
		signInModal: signInModaReducer,
	},
})

export default store
