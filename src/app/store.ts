import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import basketReducer from '../features/basket/basketSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		basket: basketReducer,
		user: userReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
