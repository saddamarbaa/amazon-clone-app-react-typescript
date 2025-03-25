import { ProductType } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a new type for items in the basket, including a quantity field
type BasketItem = ProductType & { quantity: number }

// Initial State
const initialState = {
	basket: [] as BasketItem[],
}

// Prepare the data layer
export const basketSlice = createSlice({
	name: 'basket',
	initialState,

	reducers: {
		setAddToBasketState: (
			state: { basket: BasketItem[] },
			action: PayloadAction<{
				item: ProductType
			}>,
		) => {
			const { item } = action.payload
			const existingItem = state.basket.find(
				(basketItem) => basketItem.id === item.id,
			)

			if (existingItem) {
				// If the item already exists in the basket, increment its quantity
				existingItem.quantity += 1
			} else {
				// If the item is not in the basket, add it with a quantity of 1
				state.basket.push({ ...item, quantity: 1 })
			}
		},

		setRemoveFromBasketState: (
			state: { basket: BasketItem[] },
			action: PayloadAction<{
				id: number | string
			}>,
		) => {
			// Remove the item from the basket
			state.basket = state.basket.filter(
				(item) => item.id !== action.payload.id,
			)
		},

		setIncreaseQuantity: (
			state: { basket: BasketItem[] },
			action: PayloadAction<{
				id: number | string
			}>,
		) => {
			const item = state.basket.find((item) => item.id === action.payload.id)
			if (item) {
				item.quantity += 1
			}
		},

		setDecreaseQuantity: (
			state: { basket: BasketItem[] },
			action: PayloadAction<{
				id: number | string
			}>,
		) => {
			const item = state.basket.find((item) => item.id === action.payload.id)
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1
				} else {
					// If quantity is 1, remove the item from the basket
					state.basket = state.basket.filter(
						(item) => item.id !== action.payload.id,
					)
				}
			}
		},
	},
})

export const {
	setAddToBasketState,
	setRemoveFromBasketState,
	setIncreaseQuantity,
	setDecreaseQuantity,
} = basketSlice.actions

// Pull Information from data layer
export const selectBasket = (state: { basket: { basket: BasketItem[] } }) =>
	state.basket.basket

export default basketSlice.reducer
