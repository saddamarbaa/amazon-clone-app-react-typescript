/** @format */

import { createSlice } from "@reduxjs/toolkit";

// initial State
// const [basket, setBasket] = useState([]);
const initialState = {
	basket: [],
};

// Prepare the data layer
export const basketSlice = createSlice({
	name: "basket",
	initialState,

	reducers: {
		setAddToBasketState: (state, action) => {
			// (first way)
			// Create a new copy of state.basket array, with action.payload appended to the end
			state.basket = state.basket.concat(action.payload.item);
		},

		setRemoveFromBasketState: (state, action, uuid) => {
			// Construct a new result array immutably and return it
			return state.filter((element) => element.uuid !== action.payload);

			// Construct a new array immutably
			// (second way)
			// const basket = state.basket.filter(
			// 	(item) => item.uuid !== action.payload,
			// );
		},
	},
});

export const {
	setAddToBasketState,
	setRemoveFromBasketState,
} = basketSlice.actions;

// Pull Information from data layer
export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
