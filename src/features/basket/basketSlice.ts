import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../types'

// initial State
// const [basket, setBasket] = useState([]);

const initialState = {
	basket: [],
}

// Prepare the data layer
export const basketSlice = createSlice({
	name: 'basket',
	initialState,

	reducers: {
		setAddToBasketState: (
			state: { basket: ProductType[] },
			action: PayloadAction<{
				item: ProductType
			}>,
		) => {
			// first solution(Working)
			// Create a new copy of state.basket array, with action.payload appended to the end
			// state.basket = state.basket.concat(action.payload.item);

			// second solution(Working)
			state.basket = [...state.basket, action.payload.item]
		},

		setRemoveFromBasketState: (
			state: { basket: ProductType[] },
			action: PayloadAction<{
				id: number | string
			}>,
		) => {
			// Construct a new result array immutably and return it
			state.basket = state.basket.filter(
				(item: { id: number | string }) => item.id !== action.payload.id,
			)
		},
	},
})

export const { setAddToBasketState, setRemoveFromBasketState } =
	basketSlice.actions

// Pull Information from data layer
export const selectBasket = (state: { basket: { basket: ProductType[] } }) =>
	state.basket.basket

export default basketSlice.reducer
