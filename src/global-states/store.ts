import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import basketReducer from './features/basket/basket'

export const store = configureStore({
	reducer: {
		basket: basketReducer,
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
